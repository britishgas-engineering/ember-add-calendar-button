/* eslint-disable no-useless-escape */
import Component from '@ember/component';
import layout from '../templates/components/button-base';
import moment from 'moment';
import {assert} from '@ember/debug';
import {get, computed} from '@ember/object';

export default Component.extend({
  layout,
  didRecieveAttrs() {
    this._super(...arguments);
    assert('`tagName` must be `a`', get(this, 'tagName') === 'a');
  },
  attributeBindings: ['href', 'target'],
  tagName: 'a',
  target: '_blank',
  href: computed('event', function () {
    const event = get(this, 'event');
    const args = {
      startTime: get(this, 'startTime'),
      duration: get(this, 'duration'),
      endTime: get(this, 'endTime'),
      location: get(event, 'location'),
      description: get(event, 'description'),
      plainDescription: get(event, 'plainDescription'),
      title: get(event, 'title')
    };

    return this.generateHref(args);
  }),

  /**
   * @param {object} event click event.
   * @returns {void}
   */
  click(event) {
    // In IE, the apple calendar and outlook calender items (.ics files) are not downloaded
    // by default but opened on a new tab with an error message.
    // Here we check the browser and appointment type and if it's IE, stores the .ics appointment
    // in a blob that can be downloaded
    const isMSIE = window.navigator.userAgent.indexOf('MSIE ') > 0;

    if (typeof window !== 'undefined' &&
    event.target.hasAttribute('download') &&
    (isMSIE || navigator.userAgent.match(/Trident.*rv\:11\./)) &&
    window.navigator.msSaveBlob &&
    window.Blob) {
      const blob = new Blob([this.get('href')], { type: 'text/calendar;charset=utf-8'});
      window.navigator.msSaveBlob(blob, this.get('download'));
      event.preventDefault();
    }
    get(this, 'onClick')(event);
  },
  //Properties
  startTime: computed(function () {
    const start = get(this, 'event.start');
    return moment.isMoment(start) ? start : moment(start);
  }),
  endTime: computed('event', function () {
    const start = get(this, 'startTime');
    const end = get(this, 'event.end') ? get(this, 'event.end') : false;

    if (end) {
      return moment.isMoment(end) ? end : moment(end);
    }

    return start.add(90, 'minutes');
  }),

  duration: computed('event', 'startTime', 'endTime', function () {
    if (get(this, 'event.duration')) {
      return get(this, 'event.duration');
    }

    const start = get(this, 'startTime');
    const end = get(this, 'endTime');

    return end.diff(start);
  }),

  // Must Implment by exented component
  // Should return encodeURI()'d string
  generateHref({start, duration, location, description, plainDescription}) {
    assert('start is undefined', !start);
    assert('duration is undefined', !duration);
    assert('location is undefined', !location);
    assert('description is undefined', !description);
    assert('plainDescription is undefined', !plainDescription);
  },
  /**
   * Convert object to querystring
   * @param {object} props property key value pairs
   * @returns {string} all key value pairs joined in to a string
   */
  _toQString(props) {
    const keys = Object.keys(props);
    const pairs = keys.map((x) => {
      return x + '=' + props[x];
    });

    return pairs.join('&');
  }
});
