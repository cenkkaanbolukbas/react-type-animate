import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

function App() {

  const [textColor, setTextColor] = useState('red');

// DOKUMAN LİNK https://react-type-animation.netlify.app/examples
// https://react-type-animation.netlify.app/wrapper-css

  return (
    <div >
      <h1><a href="https://react-type-animation.netlify.app/examples">DÖKÜMAN LİNKİ</a></h1>

      <div className="absolute top-0">
      <TypeAnimation
        sequence={[" cenkkaanbolukbas@hotmail.com", 1000]}
      ></TypeAnimation>

<br></br>      
<br></br>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "We produce food for Mice",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "We produce food for Hamsters",
          1000,
          "We produce food for Guinea Pigs",
          1000,
          "We produce food for Chinchillas",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />

      <br></br>
      <br></br>
      
      <TypeAnimation
  sequence={[
    'One',
    500,
    'One Two', //  Continuing previous Text
    500,
    'One Two Three',
    500,
    'One Two',
    500,
    'One',
    500,
    '',
    500,
  ]}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>

<br></br>
<br></br>

<TypeAnimation
  style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
  sequence={[
    `Line one\nLine Two\nLine Three\nLine Four\nLine Five
    
Line Seven`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
    1000,
    '',  // silinmesini istemiyorsak bu satırı kaldırıyoruz, çünkü; array'i sıfırlıyor.
  ]}
  repeat={Infinity} // silinmesini istemiyorsak bu satırı kaldırıyoruz, çünkü; array'i sıfırlıyor.
/>
      </div>

      <br></br>
      <br></br>
      
      <div className="text-white text-xl mt-5">
          <span className="typeanimatecss">          {/*  span'le App.css kodlarında ortalandı dökümanda span kullanın yazıyor */}
            <TypeAnimation
              style={{ whiteSpace: "pre-line" }}
              sequence={[
                `Cenk Kaan Bölükbaş\nInformation Systems Engineer / Computer Programmer\nYou can check out my Social Media`,
                1000,
              ]}
            />
          </span>
        </div>

        <br></br>
        <br></br>
    <div
      style={{
        fontSize: '35px',
        color: textColor,
        /* when working without ref and classNames, the manipulated style needs to be
         applied to the parent element, because the TypeAnimation component is perma-memoized */
      }}
    >
      <TypeAnimation
        sequence={[
          'One',
          800,
          () => setTextColor('aqua'),
          'One Two',
          800,
          () => setTextColor('deeppink'),
          'One Two Three',
          1000,
          () => setTextColor('darkkhaki'),
          '',
        ]}
        repeat={Infinity}
      />
    </div>
    <button
      onClick={() => {
        const items = [
          'blue',
          'green',
          'purple',
          'pink',
          'brown',
          'darkmagenta',
          'darksalmon',
          'dodgerblue',
          'firebrick',
          'darkviolet',
        ];
        setTextColor(items[Math.floor(Math.random() * items.length)]); // set random color
      }}
    >
      Change Color
    </button>

    <br></br>
    <br></br>

    <TypeAnimation
        splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
        sequence={[
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          3000,
          '',
        ]}
        speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
        omitDeletionAnimation={true}
        style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
        repeat={Infinity}
      />
  

    </div>
  );
}

export default App;
