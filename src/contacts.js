const contacts = [
  {
    id: 1,
    name: "Jacques Lacan",
    img: "https://psychojournal.ru/uploads/posts/2016-03/1457772768_3x4-lakan.jpg",
    tel: "+123 456 789",
    email: "j@lacan.com"
  },
  {
    id: 2,
    name: "Slavoj Žižek",
    img: "data:image/jpeg;base64,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",
    tel: "+987 654 321",
    email: "s@zizek.com"
  },
  {
    id: 3,
    name: "Franco Berardi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCs9M8UBozMLpyQOVpj-IXkv4LvJzLLOrtmQ&usqp=CAU",
    tel: "+918 372 574",
    email: "f@berardi.com"
  }
];
export default contacts;
