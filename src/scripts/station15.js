async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return await result
}

function test(data) {
  setTimeout(()=>{},3000);
  return data.map(buildFullName)
}

function buildFullName(data) {
  let full_name = data.family_name + ' ' + data.first_name;
  const test={ id: data.id, full_name: full_name, family_name: data.family_name, affiliation: data.affiliation, is_student: data.is_student }
  return test;
}