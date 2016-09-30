/**
 * Created by emerge_2 on 16/9/30.
 */
import {types} from 'actions/erji'

const state = {
  list1: {idx: null, sibs: ['会议', '联合办公', '购物中心', '我的案例']},
  list2: [
    {idx: null, sibs: ['type1', 'type2', '自定义模板']},
    {idx: null, sibs: null},
    {idx: null, sibs: null},
    {idx: null, sibs: null}
  ],
  list3: [
    [
      {idx: null, sibs: null},
      {idx: null, sibs: null},
      {idx: null, sibs: ['typeA', 'typeB', 'typeC']}
    ], [], [], []
  ]
}
const mutations = {
  [types.HANDLE_C1] (_, idx) {
    _.list1.idx = idx
  },
  [types.HANDLE_C2] (_, idx) {
    _.list2[_.list1.idx].idx = idx
  },
  [types.HANDLE_C3] (_, idx) {
    _.list3[_.list1.idx][_.list2[_.list1.idx].idx].idx = idx
  },
  [types.RESET_CS] (_) {
    _ = JSON.parse(JSON.stringify(state))
  }
}
export default {
  state,
  mutations
}
