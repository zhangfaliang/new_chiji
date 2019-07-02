import { testDB } from '../../app';

export const getIndex =  ()=>{
    return testDB.collection('todos').get().then(res => {
        // res.data 包含该记录的数据
        return  res.data
      })
}