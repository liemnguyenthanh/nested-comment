const users = {
  '01': {
    _id: '01',
    username: 'David Beckham 01',
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
  },
  '02': {
    _id: '02',
    username: 'David Beckham 02',
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
  },
  '03': {
    _id: '03',
    username: 'David Beckham 03',
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
  },
  '04': {
    _id: '04',
    username: 'David Beckham 04',
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
  },
}

const comments = {
  "01": {
    _id: '01',
    content: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
    timestamp: 123123123,
    user: users['01'],
    left: 1,
    right: 2
  }
}

export const Dummy = { users, comments }