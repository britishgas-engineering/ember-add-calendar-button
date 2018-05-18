import Component from '@ember/component';
import layout from '../../templates/components/types/yahoo-cal';
import {get} from '@ember/object';
import moment, { duration } from 'moment';

export default Base.extend({
  layout,
  baseUrl: 'http://calendar.yahoo.com/?v=60&view=d&type=20',
  generateHref({st = '', dur = '', in_loc = '', title = '', desc = ''}) {
    var eventDur = duration / 60 * 1000;
    var eventDuration = ((endTime.getTime() - startTime.getTime()) / 60 * 1000);

    // Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
    var yahooHourDuration = eventDuration < 600 ? '0' + Math.floor((eventDuration / 60)) : Math.floor((eventDuration / 60)) + '';

    var yahooMinuteDuration = eventDuration % 60 < 10 ? '0' + eventDuration % 60 : eventDuration % 60 + '';

    dur = yahooHourDuration + yahooMinuteDuration;

      // Remove timezone from event time
    st = formatTime(new Date(startTime - (startTime.getTimezoneOffset() * 60 * 1000))) || '';

    // if (!moment.isMoment(startTime)) {
    //   st = moment(startTime);
    // }
    // if (!moment.isMoment(endTime)) {
    //   endTime = moment(endTime);
    // }
    // let start = startTime.format('YYYYMMDDTHHmmss');
    // let end = endTime.format('YYYYMMDDTHHmmss');

    let data = {
      ST: st,
      DUR: dur,
      DESC: desc,
      Title: title,
      in_loc: in_loc,
      ctz: 'UK/London'
    }
    let string = this._toQString(data)
    return encodeURI(`${get(this, 'baseUrl')}?${string}`)
  }
});
