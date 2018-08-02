import Base from '../button-base';
import layout from '../../templates/components/types/ical-cal';
import moment from 'moment';
import {computed, get} from '@ember/object';
import {dasherize} from '@ember/string';

export default Base.extend({
  layout,
  attributeBindings: ['download'],
  download: computed('event', function () {
    const title = `${get(this, 'event.title')}-${get(this, 'startTime').format('YYYY-MM-DD')}`;
    const safe = dasherize(title);
    return `${safe
    }.ics`;
  }),
  generateHref({startTime = '', endTime = '', location = '', title = '', plainDescription = ''}) {
    if (!moment.isMoment(startTime)) {
      startTime = moment(startTime);
    }
    if (!moment.isMoment(endTime)) {
      endTime = moment(endTime);
    }
    const start = startTime.local(true).format('YYYYMMDDTHHmmss');
    const end = endTime.local(true).format('YYYYMMDDTHHmmss');

    const text = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${plainDescription.replace('\r', '\\r').replace('\n', '\\n')}`,
      `LOCATION:${location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ];

    return encodeURI(`data:text/calendar;charset=utf8,${text.join('\n')}`);
  }
});
