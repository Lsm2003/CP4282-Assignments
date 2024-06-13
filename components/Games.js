import { Text, Image } from 'react-native';

export default function Games( props ) {

  return (
  <>
  <Text>{props.games.gamedata[props.gameindex].name}</Text>
    <Image source={props.gameimages[props.gameindex]} />
    <Text>{props.games.gamedata[props.gameindex].year}</Text>
    <Text>{props.games.gamedata[props.gameindex].rating}</Text>
    <Text>{props.games.gamedata[props.gameindex].developer}</Text>
</>
  );
}
