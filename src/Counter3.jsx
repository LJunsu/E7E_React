import { useEffect, useRef, useState } from "react";
import MyButton from "./MyButton";
import { faker } from "@faker-js/faker/locale/ko";

// 바꾸지 않을 값이라면 function밖에 또는(선택) 안에 써도 된당.
const avatarURL = "https://api.dicebear.com/9.x/adventurer/svg?seed=";
const bestFriens = [
  { fid: "f001", name: "경미닝", age: 24, avatar: "energy" },
  { fid: "f002", name: "미누니", age: 42, avatar: "hate" },
  { fid: "f003", name: "선주니", age: 29, avatar: "search" },
  { fid: "f004", name: "병처니", age: 27, avatar: "alcohol" },
];

// faker-js 이용
const person = faker.person;

function Counter3() {
  let fid = useRef(1);

  const [myFriend, setMyFriend] = useState(bestFriens);

  useEffect(() => {
    //console.log(`안농 경미니`);

    return () => {
      //console.log(`미누가 미우닝`);
    };
  }, [myFriend]);

  const addFriend = () => {
    const pName = person.firstName();
    const friend = {
      fid: `new${fid.current++}`,
      name: pName,
      age: Math.floor(Math.random() * 40) + 20,
      avatar: pName,
    };

    console.log("체킁:", friend);

    const friends = [friend, ...myFriend];
    setMyFriend(friends);
  };

  return (
    <>
      <MyButton onClick={addFriend}>띤구 추강</MyButton>
      <MyButton
        onClick={() => {
          setMyFriend([]);
        }}
      >
        띤구 클리엉
      </MyButton>
      {myFriend.length != 0 ? (
        myFriend
          .filter((friend) => friend.age < 40)
          .map((friend) => (
            <div key={friend.fid}>
              <span style={{ fontWeight: "bold" }}>{friend.name}</span>
              <img
                src={`${avatarURL}${friend.name}`}
                width={200}
                height={200}
              />
            </div>
          ))
      ) : (
        <h1>금수저 띤구 떠남</h1>
      )}
    </>
  );
}

export default Counter3;