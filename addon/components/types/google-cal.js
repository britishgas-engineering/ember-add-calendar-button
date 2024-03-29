import Base from '../button-base';
import layout from '../../templates/components/types/google-cal';
import {get} from '@ember/object';
import moment from 'moment';

export default Base.extend({
  layout,
  baseUrl: 'https://calendar.google.com/calendar/r/eventedit',
  generateHref({startTime = '', endTime = '', location = '', title = '', description = ''}) {

    if (!moment.isMoment(startTime)) {
      startTime = moment(startTime);
    }
    if (!moment.isMoment(endTime)) {
      endTime = moment(endTime);
    }
    const start = startTime.tz('Europe/London').format('YYYYMMDDTHHmmss');
    const end = endTime.tz('Europe/London').format('YYYYMMDDTHHmmss');

    const data = {
      dates: `${start}/${end}`,
      details: encodeURIComponent(description),
      text: encodeURIComponent(title),
      location: encodeURIComponent(location),
      ctz: 'Europe/London'
    };
    const string = this._toQString(data);
    return `${encodeURI(get(this, 'baseUrl'))}?${string}&sf=true&output=xml`;
  }
});
