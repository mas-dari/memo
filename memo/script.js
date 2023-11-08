


// sticky-sidebarを使用したメニューバーの作成
new StickySidebar('.sidebar', {
    containerSelector: '.wrapper',
    innerWrapperSelector: '.sidebar__inner',
   })

// メモページ作成イベント
    //クリックするとメモページが作成される 

// const addBtn = $('#btn_01');

$(".btn_01").on('click', function() {
    addNewNote();
    console.log("ボタンを押しました");
  });

function addNewNote(text = '') {
// div要素を作成
const note = document.createElement('div');
console.log(note)
// noteというクラスを追加
note.classList.add('note');

// メモ帳を追加
note.innerHTML = `
<div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea>
`

// メモページの削除
// const editBtn = note.querySelector('.edit')
const deleteBtn = note.querySelector('.delete')
// const main = note.querySelector('.main')
const textArea = note.querySelector('textarea')

// テキストエリアに引数で渡したテキストを代入
    textArea.value = text

 // 削除のクリックイベントの登録

    //  deleteBtn.addEventListener('click', () => {
    //     deleteNote(note)
    //   })
 $(deleteBtn).on('click', function() {
    deleteNote(note)
  })

// 編集のクリックイベントの登録
    //   editBtn.addEventListener('click', () => {
    //     editNote(main, textArea)
    //   })
//   $(editBtn).on('click', function() {
//     editNote(main, textArea)
//   })


// テキストエリアのイベント
textArea.addEventListener('input', (e) => {
    const { value } = e.target

    // ローカルストレージの更新
    updateLS()
})

// bodyの子要素として追加
document.body.appendChild(note)
}

// ローカルストレージにメモ帳を保存
// ここ理解できていないため、自分で書き換える
function updateLS() {
    // 要素を取得
    const notesText = document.querySelectorAll('textarea')
 
    const notes = []
 
    // 要素を格納
    notesText.forEach(note => notes.push(note.value))
 
    // notesという名前でローカルストレージを保存
    localStorage.setItem('notes', JSON.stringify(notes))
}

// メモ帳削除
// createElementメソッドで作成した要素は、removeメソッドを持っていて削除ができる。
function deleteNote(note) {
  // ノートを削除
  note.remove()
 
// func updateLS() {
//   // 後で実装
// }

}

// メモ帳編集
function editNote(main, textArea) {
    // hiddenがついているものは消し、ついてないものは付与する
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  }


