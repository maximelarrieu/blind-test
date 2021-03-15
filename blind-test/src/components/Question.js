import React, { useEffect, useState, Text, Image } from "react";
import { Card, Layout } from "@material-ui/core";
import ReactAudioPlayer from 'react-audio-player';

const Question = ({ data, chooseAnswer, startTime }) => {
  const [sound, setSound] = useState();
  const makeChoice = (answerIndex) => {
    chooseAnswer({
      questionId: data.id,
      choice: data.answers[answerIndex],
      time: new Date().getTime() - startTime,
    });
  };
  const Answer = ({ answerIndex }) => (
    <Card
      style={{ flex: 1, margin: 8 }}
      onClick={() => makeChoice(answerIndex)}
    >
      {data.type === "image" ? (
        <Image
          source={{ uri: data.answers[answerIndex] }}
          style={{ height: 200 }}
          resizeMode="contain"
        />
      ) : (
        <h3>{data.answers[answerIndex]}</h3>
      )}
    </Card>
  );

  // useEffect(() => {
  //   return () => {
  //     if (sound) {
  //       console.log("Unloading Sound");
  //       sound.unloadAsync();
  //     }
  //   };
  // }, [sound]);

  // useEffect(() => {
  //   const playSound = async () => {
  //     const { sound } = await Audio.Sound.createAsync({
  //       uri: data.audio_url,
  //     });
  //     setSound(sound);
  //     // await sound.playAsync();
  //   };
  //   playSound();
  // }, [data.id]);
  return (
    <>
      <h1 category="h5" style={{ textAlign: "center" }}>
        {data.question}
      </h1>
      <>
        <Answer answerIndex={0} />
        <Answer answerIndex={1} />
      </>
      <>
        <Answer answerIndex={2} />
        <Answer answerIndex={3} />
      </>
      <ReactAudioPlayer
        src={ data.audio_url}
        autoPlay
        controls
      />
    </>
  );
};

export default Question;