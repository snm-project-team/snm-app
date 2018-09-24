import moment from 'moment';
import { takeEvery, put } from 'redux-saga/effects';
import { GET_SPOT_INFO, setSpotInfo } from '../actions/spotDetail';

export function* getSpotInfo(action) {
  let spotInfo = {
    id: 'abcde',
    name: '居酒屋 かざえ',
    imagePath: ['images/spot/test.jpg', 'images/spot/test2.jpg'],
    address: '東京都中央区',
    phoneNumber: '03-123-4567',
    businessHours: '12:00 〜 19:00',
    currentEvent: {
      id: '54321',
      name: '忘年会',
      date: moment(),
    },
    endedEventIdList: ['12345', '67890'],
    chatInfo: [{
      id: 'abcdef',
      createDate: moment(),
      updateDate: moment(),
      content: 'かざえのお店',
      WriteUser: {
        id: 'abcdefg',
        name: 'test_user',
        iconImage: 'src/images/icon/test.png',
      },
    }, {
      id: 'qwert',
      createDate: moment(),
      updateDate: moment(),
      content: 'すごい',
      WriteUser: {
        id: 'abcdefg',
        name: 'test_user',
        iconImage: 'src/images/icon/test.png',
      },
    }],
  };
  if (action.payload === '2') {
    spotInfo = {
      id: 'fghij',
      name: '絶景',
      imagePath: ['images/spot/test.jpg', 'images/spot/test2.jpg'],
      address: '神奈川県伊豆',
      phoneNumber: '03-123-4567',
      businessHours: '9:00 〜 17:00',
      currentEvent: {
        id: '54321',
        name: '忘年会',
        date: moment(),
      },
      endedEventIdList: ['12345', '67890'],
      chatInfo: [{
        id: 'abcdef',
        createDate: moment(),
        updateDate: moment(),
        content: 'めっちゃ綺麗',
        WriteUser: {
          id: 'abcdefg',
          name: 'test_user',
          iconImage: 'src/images/icon/test.png',
        },
      }, {
        id: 'qwert',
        createDate: moment(),
        updateDate: moment(),
        content: 'すごい',
        WriteUser: {
          id: 'abcdefg',
          name: 'test_user',
          iconImage: 'src/images/icon/test.png',
        },
      }],
    };
  }
  yield put(setSpotInfo(spotInfo));
}

export default function* store() {
  yield takeEvery(GET_SPOT_INFO, getSpotInfo);
}
