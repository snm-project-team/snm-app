import moment from 'moment';
import { takeEvery, put } from 'redux-saga/effects';
import { GET_SPOT_INFO, setSpotInfo } from '../actions/spotDetail';

export function* getSpotInfo(action) {
  console.log(action);
  const spotInfo = {
    id: 'abcde',
    name: '居酒屋○○',
    imagePath: ['src/images/spot/test.png', 'src/images/spot/test2.png'],
    address: '東京都中央区',
    phoneNumber: '03-123-4567',
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
      content: 'ここは美味しい',
      WriteUser: {
        id: 'abcdefg',
        name: 'test_user',
        iconImage: 'src/images/icon/test.png',
      },
    }],
  };
  yield put(setSpotInfo(spotInfo));
}

export default function* store() {
  yield takeEvery(GET_SPOT_INFO, getSpotInfo);
}
