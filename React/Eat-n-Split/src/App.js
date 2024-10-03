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
  const [friends, setFriend] = useState(initialFriends);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handlerAddFriend(e) {
    e.preventDefault();
    setIsAddFriendOpen(!isAddFriendOpen);
  }

  function handlerSetFriend(friend) {
    setFriend([...friends, friend]);
    setIsAddFriendOpen(false);
  }

  //^ Important section to remember

  function handlerSubmitForm(e, bal) {
    e.preventDefault();
    setFriend((friend) =>
      friend.map((cur) =>
        cur.id === selectedFriend.id
          ? { ...cur, balance: cur.balance + bal }
          : cur
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          setSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
          setIsAddFriendOpen={setIsAddFriendOpen}
        />
        {isAddFriendOpen && <FormAddFriend onSetFriend={handlerSetFriend} />}
        <Button onClick={handlerAddFriend}>
          {isAddFriendOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          handlerSubmitForm={handlerSubmitForm}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}

function FriendList({
  friends,
  setSelectedFriend,
  selectedFriend,
  setIsAddFriendOpen,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          setSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
          setIsAddFriendOpen={setIsAddFriendOpen}
        />
      ))}
    </ul>
  );
}
function Friend({
  friend,
  setSelectedFriend,
  selectedFriend,
  setIsAddFriendOpen,
}) {
  const isSelected = friend.id === selectedFriend?.id;
  function handlerSelectFriend(e) {
    e.preventDefault();
    setSelectedFriend(isSelected ? null : friend);
    setIsAddFriendOpen(false);
  }
  return (
    <li className={isSelected ? "selected" : ""}>
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

      <Button onClick={handlerSelectFriend}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function FormAddFriend({ onSetFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handlerSubmitForm(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID;
    const friend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    onSetFriend(friend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form onSubmit={handlerSubmitForm} className="form-add-friend">
      <label>🕺 Friend Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <label>📷 Image url</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, handlerSubmitForm }) {
  const [bill, setBill] = useState("");
  const [userEx, setUserEx] = useState("");
  const [payUser, setUser] = useState("user");
  // if (!bill && !userEx) return;
  const friendEx = bill - userEx;
  const billPayer = payUser === "user" ? friendEx : -userEx;

  return (
    <form
      onSubmit={(e) => handlerSubmitForm(e, billPayer)}
      className="form-split-bill"
    >
      <h2>Split bill with {selectedFriend.name}'s</h2>
      <label>🤑 Bill Value</label>
      <input
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        type="text"
      />

      <label>🕺 Your Expenses</label>
      <input
        value={userEx}
        onChange={(e) =>
          Number(e.target.value) > bill
            ? userEx
            : setUserEx(Number(e.target.value))
        }
        type="text"
      />
      <label>👯 {selectedFriend.name}'s Expenses</label>
      <input value={friendEx} type="text" disabled />

      <lable>Who is paying</lable>
      <select onChange={(e) => setUser(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
