import React, { useState, useRef} from 'react'
import styled from 'styled-components'
import {keyframes} from 'styled-components'

import music from '../assets/music.mp3'

const Box = styled.div`
display:flex;
cursor:pointer;
position:absolute;
left:14.5rem;
top:3rem;
z-index:10;
color: var(--color-primary);

&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};

animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
margin: 0 0.1rem;
`

const SoundBar = () => {
  const mediaQuery = window.matchMedia('(max-width: 600px)');
  const ref = useRef(null);
  const [click, setclick] = useState(false);

  const handleClick = () => {
    setclick (!click);

    if(!click && mediaQuery.matches){
        ref.current.play();
        ref.current.volume();
    }else{
        ref.current.pause();
    }
  }
  return (
    <Box onClick={() => handleClick()}>
        <Line click={click}/>
        <Line click={click}/>
        <Line click={click}/>
        <Line click={click}/>
        <Line click={click}/>

        <audio src={music} ref={ref} loop />
    </Box>
  )
}

export default SoundBar