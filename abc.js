// extraReducers: (builder) => {
//   // __addToDo 액션의 비동기 처리를 정의합니다.
//   builder.addCase(__addToDo.fulfilled, (state, action) => {
//     // 비동기 작업이 성공적으로 완료되면 이곳이 실행됩니다.
//     // action.payload에는 추가할 todo 데이터가 들어 있을 것입니다.
//     state.list.push(action.payload); // todo를 리스트에 추가합니다.
//   });

//   // __deleteTodo 액션의 비동기 처리를 정의합니다.
//   builder.addCase(__deleteTodo.fulfilled, (state, action) => {
//     // 비동기 작업이 성공적으로 완료되면 이곳이 실행됩니다.
//     // action.payload에는 삭제할 todo ID가 들어 있을 것입니다.
//     state.list = state.list.filter((todo) => todo.id !== action.payload); // 해당 ID를 가진 todo를 리스트에서 제거합니다.
//   });
// },