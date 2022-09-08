import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/category'
import * as apis from '../../apis/categoryAPI'
import * as types from '../constants/category'

function* getCategoriesSaga(action) {
    try {
        console.log('Get categories running...')
        const res = yield call(apis.getCategories, action.payload)
        if (res.status === 200) {
            console.log('Get categories done...')
            // const newData = []
            // res.data.map((item, i) => {
            //     newData.push(item.categoryName)
            // })
            yield put(actions.getCategoriesSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getCategoriesFailure(error))
    }
}

export default categorySaga = [
    takeLatest(types.GET_CATEGORIES_START, getCategoriesSaga)
]
