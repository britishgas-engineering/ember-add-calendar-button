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
    const start = startTime.tz('Europe/London').format('YYYYMMDDTHHmmss');
    const end = endTime.tz('Europe/London').format('YYYYMMDDTHHmmss');

    const text = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VTIMEZONE',
      'TZID:Europe/London',
      'BEGIN:DAYLIGHT',
      'TZOFFSETFROM:+0000',
      'TZOFFSETTO:+0100',
      'TZNAME:BST',
      'DTSTART:19700329T010000',
      'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
      'END:DAYLIGHT',
      'BEGIN:STANDARD',
      'TZOFFSETFROM:+0100',
      'TZOFFSETTO:+0000',
      'TZNAME:GMT',
      'DTSTART:19701025T020000',
      'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
      'END:STANDARD',
      'END:VTIMEZONE',
      'BEGIN:VEVENT',
      `DTSTART;TZID=Europe/London:${start}`,
      `DTEND;TZID=Europe/London:${end}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${plainDescription.replace(/\r/g, '\\r').replace(/\n/g, '\\n')}`,
      `LOCATION:${location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ];

    return encodeURI(`data:text/calendar;charset=utf8,${text.join('\n')}`);
  }
});
