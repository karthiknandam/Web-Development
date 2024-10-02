import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isId, setId] = useState(null);

  const value = initialFriends.filter((a) => a.id === isId)[0];

  console.log(value);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList isOpen={isOpen} setOpen={setIsOpen} setId={setId} />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
      <FormSplitBill friend={value} isOpen={isOpen} />
    </div>
  );
}

function FriendList({ isOpen, setOpen, setId }) {
  const list = initialFriends;

  return (
    <ul>
      {list.map((friend) => (
        <Friend
          isOpen={isOpen}
          setOpen={setOpen}
          friend={friend}
          key={friend.id}
          id={friend.id}
          setId={setId}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, isOpen, setOpen, id, setId }) {
  function handler(e) {
    e.preventDefault();
    setOpen(!isOpen);
    setId(id);
  }
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button handler={handler}>Select</Button>
    </li>
  );
}
function Button({ children, handler }) {
  // let val;
  // if (children === "Select") {
  //   val = handler;
  // }
  return (
    <button onClick={handler} className="button">
      {children}
    </button>
  );
}
function FormAddFriend() {
  function handler(e) {
    e.preventDefault();
    console.log("Add is clicked");
  }
  return (
    <form className="form-add-friend">
      <label>🕺 Friend Name</label>
      <input type="text" />
      <label>📷 Image url</label>
      <input type="text" />
      <Button handler={handler}>Add</Button>
    </form>
  );
}

function FormSplitBill({ isOpen, friend }) {
  return (
    isOpen && (
      <form className="form-split-bill">
        <h2>Split bill with {friend.name}'s</h2>
        <label>🤑 Bill Value</label>
        <input type="number" />

        <label>🕺 Your Expenses</label>
        <input type="text" />
        <label>👯 {friend.name}'s Expenses</label>
        <input type="text" disabled />

        <lable>Who is paying</lable>
        <select>
          <option value="user">You</option>
          <option value="friend">{friend.name}</option>
        </select>
        <Button>Split bill</Button>
      </form>
    )
  );
}
