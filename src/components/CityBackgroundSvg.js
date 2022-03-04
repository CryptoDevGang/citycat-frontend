import {animated, useSpring, to, config} from 'react-spring'
import {useRef, useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

export const CityBackgroundSvg = (props) => {
  const width870 = useMediaQuery('(max-width:870px)');
  const springRef = useRef();
  const transform = useSpring({
    from: {transform: `translateY(-2000px)`},
    to: {transform: `translateY(0px)`},
    delay: 2000,
    config: {mass:1, tension:150, friction:4, precision: 0}

  })
  const [isActivePostOffice, setActivePostOffice] = useState(false)
  const [isActivePhotoStudio, setActivePhotoStudio] = useState(false)
  const [isActiveBuilding, setActiveBuilding] = useState(false)
  const [isActiveShop, setActiveShop] = useState(false)
  const [isActiveMarket, setActiveMarket] = useState(false)
  const [isActiveBus, setActiveBus] = useState(false)
  const [isActiveSquare, setActiveSquare] = useState(false)

  return (
    <Box mt={width870 ? 0 : -15}>
      <svg
        id="\uB808\uC774\uC5B4_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x={0}
        y={0}
        viewBox="0 0 1920 1044"
        style={{
          enableBackground: "new 0 0 1920 1044",
        }}
        xmlSpace="preserve"
        {...props}
      >
        <style>
          {
            ".st1,.st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9{fill:#e89746;stroke:#222;stroke-width:2.88;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9{fill:#ffb05a}.st3,.st4,.st5,.st6,.st7,.st8,.st9{fill:none;stroke-width:2.4}.st4,.st5,.st6,.st7,.st8,.st9{fill:#fe3937;stroke-width:2.88}.st5,.st6,.st7,.st8,.st9{fill:none}.st6,.st7,.st8,.st9{fill:#fff}.st7,.st8,.st9{fill:#fe3937;stroke-width:2}.st8,.st9{fill:#b56e39;stroke-width:2.88}.st9{fill:#ea2828}.st10{fill:none;stroke-width:2}.st10,.st11,.st12{stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st11{fill:#4aa562;stroke-width:2}.st12{fill:none}.st13{stroke-width:1.0126}.st13,.st14{fill:#533bff;stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st15{fill:#222}.st16,.st17,.st18{fill:none;stroke:#222;stroke-width:.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st17,.st18{fill:#fff;stroke-width:1.2429}.st18{fill:none;stroke-width:.9799}.st19{fill:#fe3937}.st20,.st21,.st22{fill:#cfcfcf;stroke:#222;stroke-width:2.88;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st21,.st22{fill:#bfbfbf}.st22{fill:#4aa562}.st24{fill:#fff}.st25,.st26,.st27,.st28,.st29,.st31,.st32{fill:#ff7c7a;stroke:#222;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st26,.st27,.st28,.st29,.st31,.st32{fill:#7dd7ff}.st27,.st28,.st29,.st31,.st32{fill:#fff57d}.st28,.st29,.st31,.st32{fill:#80ffa1}.st29,.st31,.st32{fill:#fee56e;stroke-width:2.88}.st31,.st32{fill:#eacd50}.st32{fill:#533bff}.st34{fill:#f93ade}.st39,.st40,.st42{fill:none;stroke:#000;stroke-width:2.2029;stroke-miterlimit:10}.st40,.st42{fill:#ffbed3;stroke:#222;stroke-width:2.88;stroke-linecap:round;stroke-linejoin:round}.st42{fill:none;stroke-width:1.92}.st43,.st44,.st45,.st46,.st47,.st48,.st49,.st50,.st51,.st53,.st54,.st55,.st56{fill:#a9e4ff;stroke:#222;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st44,.st45,.st46,.st47,.st48,.st49,.st50,.st51,.st53,.st54,.st55,.st56{fill:#fe3937;stroke-width:2.2}.st45,.st46,.st47,.st48,.st49,.st50,.st51,.st53,.st54,.st55,.st56{fill:#fee56e}.st46,.st47,.st48,.st49,.st50,.st51,.st53,.st54,.st55,.st56{fill:#cfcfcf;stroke-width:2.4}.st47,.st48,.st49,.st50,.st51,.st53,.st54,.st55,.st56{stroke-width:2.3997;stroke-miterlimit:9.9994}.st48,.st49,.st50,.st51,.st53,.st54,.st55,.st56{fill:#533bff;stroke-width:2.4;stroke-miterlimit:10}.st49,.st50,.st51,.st53,.st54,.st55,.st56{fill:#f792b7;stroke-width:2.88}.st50,.st51,.st53,.st54,.st55,.st56{fill:#8c3f5e;stroke-width:2.2}.st51,.st53,.st54,.st55,.st56{fill:none}.st53,.st54,.st55,.st56{fill:#c3a96b;stroke-width:2.88}.st54,.st55,.st56{fill:#69b1e2}.st55,.st56{fill:#8bd0f7}.st56{fill:#a9e4ff}.st57{fill:#fe9753}.st58,.st59{fill:#aa814f;stroke:#222;stroke-width:1.92;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st59{fill:#a9e4ff;stroke-width:2.88;enable-background:new}.st59,.st60{opacity:.2}.st61,.st62{stroke-width:1.92}.st61{fill:#bfbfbf;stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st62{fill:#ff7c7a}.st106,.st62,.st63{stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st63{fill:#fff;stroke-width:1.92}.st106{stroke-width:2.88}.st106,.st107{fill:#aa814f}.st109,.st111,.st113,.st114,.st115,.st116,.st117,.st118,.st119,.st121,.st122{fill:#fe3937;stroke:#222;stroke-width:1.92;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st111,.st113,.st114,.st115,.st116,.st117,.st118,.st119,.st121,.st122{fill:#d16161}.st113,.st114,.st115,.st116,.st117,.st118,.st119,.st121,.st122{fill:#fff871}.st114,.st115,.st116,.st117,.st118,.st119,.st121,.st122{fill:#83d84c}.st115,.st116,.st117,.st118,.st119,.st121,.st122{fill:#565656;stroke-width:2.4}.st116,.st117,.st118,.st119,.st121,.st122{stroke-width:2.4003;stroke-miterlimit:10.0012}.st117,.st118,.st119,.st121,.st122{stroke-width:2.3997;stroke-miterlimit:9.9988}.st118,.st119,.st121,.st122{fill:#fee56e;stroke-width:2.4;stroke-miterlimit:10}.st119,.st121,.st122{fill:#fe9753;stroke-width:1.92}.st121,.st122{fill:#fff;stroke-width:1.9203;stroke-miterlimit:10.0009}.st122{stroke-width:2.4;stroke-miterlimit:10}.st123{opacity:.6;fill:#a9e4ff;enable-background:new}.st124,.st125{fill:#d1d1d1;stroke:#222;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st125{fill:#fff}.st126{fill:#adadad}.st130,.st132{opacity:.2;enable-background:new}.st132{fill:#fff}.st133{opacity:.4}.st134,.st135{fill:#222;stroke:#222;stroke-width:.48;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st135{fill:none;stroke-width:.96}.st140{stroke:#80ffa1;stroke-width:2}.st140,.st141,.st151,.st156{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st141{stroke:#ff7c7a;stroke-width:2}.st151,.st156{stroke:#fff}.st156{fill:#fff;stroke:#222;stroke-width:2.5}.st159{fill:none;stroke:#000;stroke-width:2.4;stroke-miterlimit:10.0004}.st166,.st167{fill:#ea0000;stroke:#222;stroke-width:1.4167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st167{fill:#1313bf}.st168{fill:#ea0000}.st169{fill:#c60000}.st170{fill:#f93030}.st171,.st172{fill:none;stroke:#222;stroke-width:1.4167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st172{stroke:#fff;stroke-width:.9893}.st173{fill:#ffddd7}.st175,.st176{opacity:.3;enable-background:new}.st175{fill:none;stroke:#222;stroke-width:1.0366;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st176{fill:#222}.st177,.st178{fill:#cfcfcf;stroke:#222;stroke-width:2.4001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10.0004}.st178{fill:#ba61ff;stroke-width:1.3547;stroke-miterlimit:10}.st181{fill:#8a3cd6}.st182{fill:#c283ff}.st183{opacity:.26;fill:#fff;enable-background:new}.st184,.st186{fill:#2c27a0;stroke:#222;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st186{fill:#fe3937;stroke-width:2.4}.st187{opacity:.5;fill:#ffe97b;enable-background:new}.st188,.st190,.st191{fill:#fee56e;stroke:#222;stroke-width:1.92;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st190,.st191{fill:none;stroke:#fff;stroke-width:2.88}.st191{fill:#fff533;stroke:#222;stroke-width:1.4167}.st197{fill:#d68e4d}.st198{fill:#f4ab5d}.st201{fill:#533bff}.st202,.st228,.st229,.st230{fill:#fff;stroke:#222;stroke-width:1.92;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10.0002}.st228,.st229,.st230{fill:#fe3937;stroke-width:1.2;stroke-miterlimit:10}.st229,.st230{fill:#83d84c}.st230{fill:#ff7c7a}.st253{fill:#9b9bcc}.st255{opacity:.6;fill:#fff;enable-background:new}.st256,.st259,.st260,.st261,.st262{fill:none;stroke:#222;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st259,.st260,.st261,.st262{fill:#3ac626;stroke-width:2.4}.st260,.st261,.st262{fill:#7f5a3c}.st261,.st262{fill:#eac960}.st262{fill:#e2b486}"
          }
          {
            ".sst1{display:none}.sst2{display:inline}.sst10,.sst11,.sst3,.sst4,.sst5,.sst6,.sst7,.sst8,.sst9{fill:#e89746;stroke:#222;stroke-width:2.88;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst10,.sst11,.sst4,.sst5,.sst6,.sst7,.sst8,.sst9{fill:#ffb05a}.sst10,.sst11,.sst5,.sst6,.sst7,.sst8,.sst9{fill:none;stroke-width:2.4}.sst10,.sst11,.sst6,.sst7,.sst8,.sst9{fill:#fe3937;stroke-width:2.88}.sst10,.sst11,.sst7,.sst8,.sst9{fill:none}.sst10,.sst11,.sst8,.sst9{fill:#fff}.sst10,.sst11,.sst9{fill:#fe3937;stroke-width:2}.sst10,.sst11{fill:#b56e39;stroke-width:2.88}.sst11{fill:#ea2828}.sst12{fill:none;stroke-width:2}.sst12,.sst13,.sst14{stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst13{fill:#4aa562;stroke-width:2}.sst14{fill:none}.sst15{stroke-width:1.0126}.sst15,.sst16{fill:#533bff;stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst17{fill:#222}.sst18,.sst19,.sst20{fill:none;stroke:#222;stroke-width:.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst19,.sst20{fill:#fff;stroke-width:1.2429}.sst20{fill:none;stroke-width:.9799}.sst21{fill:#fe3937}.sst22,.sst23,.sst24{fill:#cfcfcf;stroke:#222;stroke-width:2.88;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst23,.sst24{fill:#bfbfbf}.sst24{fill:#4aa562}.sst26{fill:#fff}.sst27,.sst28,.sst29,.sst30,.sst31,.sst33,.sst34{fill:#ff7c7a;stroke:#222;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst28,.sst29,.sst30,.sst31,.sst33,.sst34{fill:#7dd7ff}.sst29,.sst30,.sst31,.sst33,.sst34{fill:#fff57d}.sst30,.sst31,.sst33,.sst34{fill:#80ffa1}.sst31,.sst33,.sst34{fill:#fee56e;stroke-width:2.88}.sst33,.sst34{fill:#eacd50}.sst34{fill:#533bff}.sst36{fill:#f93ade}.sst41,.sst42,.sst44{fill:none;stroke:#000;stroke-width:2.2029;stroke-miterlimit:10}.sst42,.sst44{fill:#ffbed3;stroke:#222;stroke-width:2.88;stroke-linecap:round;stroke-linejoin:round}.sst44{fill:none;stroke-width:1.92}.sst45,.sst46,.sst47,.sst48,.sst49,.sst50,.sst51,.sst52,.sst53,.sst55,.sst56,.sst57,.sst58{fill:#a9e4ff;stroke:#222;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst46,.sst47,.sst48,.sst49,.sst50,.sst51,.sst52,.sst53,.sst55,.sst56,.sst57,.sst58{fill:#fe3937;stroke-width:2.2}.sst47,.sst48,.sst49,.sst50,.sst51,.sst52,.sst53,.sst55,.sst56,.sst57,.sst58{fill:#fee56e}.sst48,.sst49,.sst50,.sst51,.sst52,.sst53,.sst55,.sst56,.sst57,.sst58{fill:#cfcfcf;stroke-width:2.4}.sst49,.sst50,.sst51,.sst52,.sst53,.sst55,.sst56,.sst57,.sst58{stroke-width:2.3996;stroke-miterlimit:9.9992}.sst50,.sst51,.sst52,.sst53,.sst55,.sst56,.sst57,.sst58{fill:#533bff;stroke-width:2.4;stroke-miterlimit:10}.sst51,.sst52,.sst53,.sst55,.sst56,.sst57,.sst58{fill:#f792b7;stroke-width:2.88}.sst52,.sst53,.sst55,.sst56,.sst57,.sst58{fill:#8c3f5e;stroke-width:2.2}.sst53,.sst55,.sst56,.sst57,.sst58{fill:none}.sst55,.sst56,.sst57,.sst58{fill:#c3a96b;stroke-width:2.88}.sst56,.sst57,.sst58{fill:#69b1e2}.sst57,.sst58{fill:#8bd0f7}.sst58{fill:#a9e4ff}.sst59{fill:#fe9753}.sst60,.sst61{fill:#aa814f;stroke:#222;stroke-width:1.92;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst61{fill:#a9e4ff;stroke-width:2.88;enable-background:new}.sst61,.sst62{opacity:.2}.sst63,.sst64{stroke-width:1.92}.sst63{fill:#bfbfbf;stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst64{fill:#ff7c7a}.sst108,.sst64,.sst65{stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst65{fill:#fff;stroke-width:1.92}.sst108{stroke-width:2.88}.sst108,.sst109{fill:#aa814f}.sst111,.sst113,.sst115,.sst116,.sst117,.sst118,.sst119,.sst120,.sst121,.sst123,.sst124{fill:#fe3937;stroke:#222;stroke-width:1.92;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst113,.sst115,.sst116,.sst117,.sst118,.sst119,.sst120,.sst121,.sst123,.sst124{fill:#d16161}.sst115,.sst116,.sst117,.sst118,.sst119,.sst120,.sst121,.sst123,.sst124{fill:#fff871}.sst116,.sst117,.sst118,.sst119,.sst120,.sst121,.sst123,.sst124{fill:#83d84c}.sst117,.sst118,.sst119,.sst120,.sst121,.sst123,.sst124{fill:#565656;stroke-width:2.4}.sst118,.sst119,.sst120,.sst121,.sst123,.sst124{stroke-width:2.4004;stroke-miterlimit:10.0016}.sst119,.sst120,.sst121,.sst123,.sst124{stroke-width:2.3996;stroke-miterlimit:9.9984}.sst120,.sst121,.sst123,.sst124{fill:#fee56e;stroke-width:2.4;stroke-miterlimit:10}.sst121,.sst123,.sst124{fill:#fe9753;stroke-width:1.92}.sst123,.sst124{fill:#fff;stroke-width:1.9204;stroke-miterlimit:10.0012}.sst124{stroke-width:2.4;stroke-miterlimit:10}.sst125{opacity:.6;fill:#a9e4ff;enable-background:new}.sst126,.sst127{fill:#d1d1d1;stroke:#222;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst127{fill:#fff}.sst128{fill:#adadad}.sst130,.sst132{opacity:.2;enable-background:new}.sst132{fill:#fff}.sst133{opacity:.4}.sst134,.sst135{fill:#222;stroke:#222;stroke-width:.48;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst135{fill:none;stroke-width:.96}.sst140{stroke:#80ffa1;stroke-width:2}.sst140,.sst141,.sst151,.sst156{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst141{stroke:#ff7c7a;stroke-width:2}.sst151,.sst156{stroke:#fff}.sst156{fill:#fff;stroke:#222;stroke-width:2.5}.sst159{fill:none;stroke:#000;stroke-width:2.4;stroke-miterlimit:10.0006}.sst166,.sst167{fill:#ea0000;stroke:#222;stroke-width:1.4167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst167{fill:#1313bf}.sst168{fill:#ea0000}.sst169{fill:#c60000}.sst170{fill:#f93030}.sst171,.sst172{fill:none;stroke:#222;stroke-width:1.4167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst172{stroke:#fff;stroke-width:.9893}.sst173{fill:#ffddd7}.sst175,.sst176{opacity:.3;enable-background:new}.sst175{fill:none;stroke:#222;stroke-width:1.0366;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst176{fill:#222}.sst177,.sst178{fill:#cfcfcf;stroke:#222;stroke-width:2.4002;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10.0007}.sst178{fill:#ba61ff;stroke-width:1.3547;stroke-miterlimit:10}.sst181{fill:#8a3cd6}.sst182{fill:#c283ff}.sst183{opacity:.26;fill:#fff;enable-background:new}.sst184,.sst186{fill:#2c27a0;stroke:#222;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst186{fill:#fe3937;stroke-width:2.4}.sst187{opacity:.5;fill:#ffe97b;enable-background:new}.sst188,.sst190,.sst191{fill:#fee56e;stroke:#222;stroke-width:1.92;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst190,.sst191{fill:none;stroke:#fff;stroke-width:2.88}.sst191{fill:#fff533;stroke:#222;stroke-width:1.4167}.sst197{fill:#d68e4d}.sst198{fill:#f4ab5d}.sst201{fill:#533bff}.sst202,.sst228,.sst229,.sst230{fill:#fff;stroke:#222;stroke-width:1.92;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10.0003}.sst228,.sst229,.sst230{fill:#fe3937;stroke-width:1.2;stroke-miterlimit:10}.sst229,.sst230{fill:#83d84c}.sst230{fill:#ff7c7a}.sst253{fill:#9b9bcc}.sst255{opacity:.6;fill:#fff;enable-background:new}.sst256,.sst259,.sst260,.sst261,.sst262{fill:none;stroke:#222;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.sst259,.sst260,.sst261,.sst262{fill:#3ac626;stroke-width:2.4}.sst260,.sst261,.sst262{fill:#7f5a3c}.sst261,.sst262{fill:#eac960}.sst262{fill:#e2b486}"
          }
        </style>
        <defs>
          <path id="SVGID_1_" d="M0 0h1920v1044H0z" />
        </defs>
        <clipPath id="SVGID_00000001623325665523415340000005008654732695318422_">
          <use
            xlinkHref="#SVGID_1_"
            style={{
              overflow: "visible",
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath:
              "url(#SVGID_00000001623325665523415340000005008654732695318422_)",
          }}
        >
          <image
            style={{
              overflow: "visible",
              enableBackground: "new",
            }}
            width={9029}
            height={5488}
            xlinkHref="/173998E4B9A74023.png"
            transform="translate(-64.183 -160.065) scale(.2399)"
          />
          <g id="main_x5F_off">
            <g id="post_office_x5F_off" onMouseEnter={()=>setActivePostOffice(true)} style={{display: isActivePostOffice? "none" : "block"}}>
              <path
                className="st1"
                d="M772.1 441.5v67.2l74.1 27.8 79.2-35.1v-63.3z"
              />
              <path
                className="st2"
                d="m923.9 439.3-72.4 28.2c-4.2 1.6-8.8 1.7-13 .1l-64.3-23.7c-2.6-1-2.9-4.3-.5-5.7l78-43.7 72.4 40.9c1.7.9 1.5 3.2-.2 3.9z"
              />
              <path className="st3" d="M846 468.7v67" />
              <path
                className="st4"
                d="M806 388.2v34.6l41.3 13.1 44.3-17.2v-32.4z"
              />
              <path
                className="st4"
                d="m891.6 386.3-44.4 12.6-41.2-10.7 44.4-12.6z"
              />
              <path className="st5" d="M847.2 399.7v34.5" />
              <path
                className="st6"
                d="m826.9 366.1 7.1 21.8 18.8.6 29.6-19.4-9.4-29z"
              />
              <path className="st5" d="m826.9 366.1 29.7 2.2 16.4-28.2" />
              <path
                className="st7"
                d="M855 365.2c.8-.2 1.6-.8 2.3-1.1.1 0 .8-3.3 1.3-4.7.8 1.4 4.8 6.2 5.2 7.2 1.8 4.3-7.8 9.4-10.3 6-1.7-2.1-1.9-6.4-3.6-8.9 1.3 0 4.6 1.6 5.1 1.5z"
              />
              <path className="st8" d="M866.9 485.2v30.1l40.9-15.6v-26.3z" />
              <path
                className="st3"
                d="m846 482.5-73.9-28.6M846 493.2l-73.9-28.6M846 503.9l-73.9-28.5M846 514.6l-73.9-28.5M846 525.3l-73.9-28.4M846.2 482l79.2-31.6M846.2 493.2l79-31.5M908.4 478.8c5.6-2.2 11.2-4.5 16.8-6.7M846.2 503.9c7.1-2.5 13.8-5.7 20.7-8.4M908.5 489.2c5.5-2.3 11-4.6 16.5-6.8M846.2 514.6c6.8-2.8 13.7-5.5 20.5-8.4M908.3 498.7c5.5-2.4 11.2-4.4 16.4-7.1M846.2 525.3c6.8-2.9 13.6-5.9 20.4-8.8M787 459.8v10.3M804.2 477.6v10.1M789.4 482.4v10.2M795.1 495.5v10.2M830.9 498.8v9.8M818.1 504.1v10.2M840.4 491.1v10.2M859.2 477.8V488M884.9 455.3v10.2M910.7 456.8V467M921.9 463.7v9.4M852.6 502v9.4M860.7 519.3v10.2M917 485.7v9.4M823.1 474v10.1M814.2 458.9v10.2M779.4 446.5v9.4M807 510.8V521M781.6 500.7V511"
              />
              <path
                className="st9"
                d="M816.4 426.1c-.3-6.3-5.1-13.7-1.5-16.4.3-.2 6.3-4.2 9.2-4.3 6-.3 12.5 7.5 13.1 19.7.1 2.3 0 5.3-.2 7.4l-7.2 5-13.4-11.4z"
              />
              <path
                className="st6"
                d="M809.2 431.2c-.6-12.1 3-22.2 8.9-22.5 6-.3 11.2 9.4 11.8 21.5.1 2.3 0 5.3-.2 7.4l-20.5-6.4z"
              />
              <path
                className="st5"
                d="m810.3 425.8 18.4 4.7M811 419.7l17.3 4M812.8 413.8l13.6 2.9M818.9 409.4V434"
              />
              <path
                className="st9"
                d="M880.8 425.5c.3-6.3 5.1-13.7 1.5-16.4-.3-.2-6.3-4.2-9.2-4.3-6-.3-12.5 7.5-13.1 19.7-.1 2.3 0 5.3.2 7.4l7.2 5 13.4-11.4z"
              />
              <path
                className="st6"
                d="M888 430.6c.6-12.1-3-22.2-8.9-22.5-6-.3-11.2 9.4-11.8 21.5-.1 2.3 0 5.3.2 7.4l20.5-6.4z"
              />
              <path
                className="st5"
                d="m886.9 425.2-18.5 4.7M886.2 419.1l-17.3 4M884.4 413.2l-13.6 2.9M878.3 408.9v24.5"
              />
              <path
                className="st4"
                d="m866.9 521.3.1 6.1 19.9 9.4 38.7-21.9-13.3-6.1c.1.1-45.1 12.5-45.4 12.5z"
              />
              <path
                className="st4"
                d="M887.1 530.2v6.7l38.7-15.5v-6.2c0-.1-38.4 15-38.7 15z"
              />
              <path className="st5" d="m880.4 527.3 6.7 2.9" />
              <path
                className="st4"
                d="M866.9 514.4v6.7l13.3 6.2 38.7-21.9-13.3-5.3s-38.4 14.3-38.7 14.3z"
              />
              <path
                className="st4"
                d="M880.3 520.6v6.7l38.7-15.5v-6.2c0-.1-38.5 15-38.7 15z"
              />
              <path className="st5" d="m867.3 515.2 13 5.4" />
              <path
                className="st4"
                d="M876.8 515.8h0c-1.2 0-2.3-1-2.3-2.3v-30.1c0-1.2 1-2.3 2.3-2.3h0c1.2 0 2.3 1 2.3 2.3v30.1c-.1 1.3-1.1 2.3-2.3 2.3z"
              />
              <path
                className="st10"
                d="M805.7 407.5c-2.3 0-2.4 1.5-3.3 3.6-.9 2.1-1 4.5-.7 6.8.4 4.5 1.7 8.9 3.7 12.9 2.9 5.8 7.3 10.8 8.9 17.1 1.5 5.9.3 12.4-3.2 17.4-1.7 2.4-3.8 4.3-5.6 6.6-4.9 6.1-7.2 14.3-6 22"
              />
              <path
                className="st11"
                d="M799.9 427.2c-2.1.3-4 1.4-5.2 3.1 1.7 1.1 3.6 2.2 5.6 2.4 5.5.3 5.7-6.3-.4-5.5zM820.2 454.1c1.8 1.1 3.1 2.9 3.5 5-2.1.3-4.2.5-6.1-.2-5.2-1.9-2.6-8 2.6-4.8zM816.4 466.3c1.2 1.6 1.8 3.8 1.5 5.9-2-.5-4.1-1-5.7-2.4-4.1-3.5.5-8.4 4.2-3.5zM808.1 477c1.2 1.6 1.8 3.8 1.5 5.9-2-.5-4.1-1-5.7-2.4-4-3.5.5-8.3 4.2-3.5zM830.8 439.4c1.6-1.3 3.7-2 5.8-1.7-.4 2-.8 4.1-2.1 5.8-3.3 4.2-8.4-.2-3.7-4.1zM847.1 443.4c.8-1.9 2.4-3.6 4.3-4.3.6 2 1.3 4 .9 6-.9 5.4-7.4 4-5.2-1.7zM857.2 442.2c1.4-1.5 3.4-2.5 5.5-2.6-.1 2.1-.2 4.2-1.2 6-2.7 4.7-8.4 1.2-4.3-3.4zM882.5 436.7c1.4-1.5 3.4-2.5 5.5-2.6-.1 2.1-.2 4.2-1.2 6-2.8 4.7-8.4 1.2-4.3-3.4zM893.1 434c-.6-2-.3-4.2.8-6 1.7 1.2 3.5 2.4 4.4 4.3 2.5 4.8-3.5 7.6-5.2 1.7zM834.8 452.6c1.6 1.3 3.7 2 5.8 1.7-.4-2-.8-4.1-2.1-5.8-3.4-4.2-8.5.2-3.7 4.1zM852.2 453.8c.8 1.9 2.4 3.6 4.3 4.3.6-2 1.3-4 .9-6-.9-5.4-7.4-4-5.2 1.7zM803 414.6c1.5-1.4 3.6-2.2 5.7-2-.3 2-.6 4.2-1.8 5.9-3.1 4.3-8.3.3-3.9-3.9z"
              />
              <path
                className="st11"
                d="M797.1 412c-2.1.3-4 1.4-5.2 3.1 1.7 1.1 3.6 2.2 5.6 2.4 5.4.3 5.7-6.3-.4-5.5zM801.1 403.3c-1.9-.9-4.1-1-6-.2.9 1.9 1.8 3.8 3.5 5 4.1 3.3 8-2.1 2.5-4.8z"
              />
              <path
                className="st10"
                d="M813.6 446.1c3-2 6.4-2.4 10-2.1s7.1 1.4 10.5 2.4c8.8 2.4 18.1 3.6 26.9 1.2 7.5-2 14.9-6.8 22.6-5.2 1.3.3 2.6.7 3.9.8 3.2.2 6.2-1.8 8.4-4.2 4.3-4.5 7-10.3 8.3-16.3.5-2.2.7-4.8-.9-6.4-1.2-1.2-3-1.4-4.6-1.1s-3 1.2-4.5 2.1"
              />
              <path
                className="st11"
                d="M810.7 443.6c-2.1-.2-4.2.4-5.8 1.7 1.4 1.5 2.9 3 4.9 3.7 5.1 1.7 7-4.7.9-5.4zM809 455.1c-1.9.8-3.5 2.4-4.3 4.3 2 .6 4 1.2 6 .8 5.4-.9 3.9-7.4-1.7-5.1zM801.8 466.8c-2.1 0-4.2.8-5.7 2.2 1.5 1.3 3.2 2.7 5.2 3.2 5.3 1.3 6.6-5.3.5-5.4zM802.8 435.1c-1.9.9-3.4 2.5-4.1 4.5 2 .5 4.1 1.1 6.1.6 5.3-1.3 3.6-7.7-2-5.1zM884.6 448.3c1.1 1.8 2.8 3.2 4.8 3.6.3-2 .7-4.2 0-6.1-1.6-5.1-7.8-2.8-4.8 2.5zM898.4 445c2.1.2 4.2-.5 5.8-1.8-1.4-1.4-3-3-4.9-3.6-5.3-1.6-7 4.8-.9 5.4zM906.8 433.4c2-.4 3.9-1.7 5-3.5-1.8-1-3.7-1.9-5.8-1.9-5.4 0-5.2 6.6.8 5.4zM907.2 412.1c-.5-2-1.8-3.8-3.6-4.9-.9 1.8-1.9 3.8-1.8 5.9.1 5.4 6.7 4.9 5.4-1zM869.6 450.6c1.7 1.2 3.9 1.5 6 1.1-.6-2-1.2-4-2.7-5.5-3.8-3.8-8.3 1-3.3 4.4zM898.1 424.1c-1-1.8-1.2-4.1-.5-6 1.9.8 3.9 1.6 5.2 3.2 3.5 4.2-1.8 8.2-4.7 2.8zM812.3 434.3c1.6-1.3 3.7-2 5.8-1.7-.4 2-.8 4.1-2.1 5.8-3.3 4.2-8.4-.2-3.7-4.1z"
              />
              <path
                className="st4"
                d="M907.8 504.2h0c-1.2 0-2.3-1-2.3-2.3v-30.1c0-1.2 1-2.3 2.3-2.3h0c1.2 0 2.3 1 2.3 2.3V502c0 1.2-1 2.2-2.3 2.2z"
              />
              <path
                className="st4"
                d="M866.9 477.3v7.9l13.3 6.2 38.7-23.1-13.3-6.1s-38.4 15.1-38.7 15.1z"
              />
              <path
                className="st4"
                d="M880.3 483.6v7.9L919 476v-7.4c0-.1-38.5 15-38.7 15z"
              />
              <path className="st5" d="m867.3 478.1 13 5.5" />
              <path
                className="st12"
                d="M871.7 387.4c.4-.4.7-.9 1.1-1.3.4.5.8 1 1.2 1.4"
              />
              <path
                className="st12"
                d="M872.8 388.2c-.2-1.4-.1-2.8.2-4.2M876.3 387.3c.2-.5.3-1.1.5-1.6.5.3 1.1.6 1.6.9"
              />
              <path className="st12" d="M877.6 387.6c-.7-1.3-1.2-2.6-1.5-4" />
              <path
                className="st13"
                d="M871.6 378c-.6-1-1.6-2.2-2.2-2-1.8.8-3 8.5.9 8"
              />
              <path
                className="st14"
                d="M878.3 371.8c1.3 1.5.5 4-.9 5.2 4.2 6.5-.1 8.7-3.2 8.7-1.7 0-4.8-1.6-4.8-4.2.1-1.7 2.5-3.7 2.3-5.5-.7-4.3 4-7.3 6.6-4.2z"
              />
              <path
                className="st15"
                d="M879 376.1c.2.2.1.5-.2.5-.9-.1-2-.3-2.2-.4-.2 0-.6-.5-.3-1.2 0 0 0-.1.1-.1.3-.4.8-.4 1.3-.1.3.4.9.9 1.3 1.3z"
              />
              <path className="st16" d="m875.5 373.5.1.8M877.4 373.2l.1.8" />
              <path
                className="st17"
                d="M773.5 437.8c0 .1 0 .1 0 0 .7 1.8 2.9 3.2 4.7 2.7 1.4-.4 2.6-1.3 3.8-2.1 1.2-.8 1.6-2.9 1.1-4.3-1.1-2.7-5-1.3-7.9 0-1.5.7-2.3 2.3-1.7 3.7z"
              />
              <path
                className="st12"
                d="M780.3 432.6c.4-1.3-.1-2.9-1.4-3.3-1.9-.5-4.4.3-3.8 4.4"
              />
              <path className="st18" d="m773.6 437.2 5-.3 3.8-3.6" />
              <path
                className="st19"
                d="M778.2 438.5c-.5 0-.8-.2-1-.5s-.3-.7-.4-1.1c-.1-.3-.1-.6-.2-.8-.1-.2-.1-.3 0-.5s.3-.3.4-.3c.3 0 .5.1.9.3 0 0 .1 0 .1.1h.1c.1-.2.2-.6.3-.8.1-.2.3-.3.4-.3.2 0 .4.1.4.3.1.1.3.4.5.7.3.5.5.8.6.9.1.4.1.8-.2 1.1-.3.5-1.2.9-1.9.9z"
              />
              <path
                className="st15"
                d="M778.9 435.1c.2.3.9 1.4 1 1.6.2.7-.9 1.4-1.6 1.4-.3 0-.5-.1-.6-.3-.3-.5-.3-1.4-.6-1.9.3 0 .9.4 1 .4.2 0 .3-.1.5-.2 0-.1.1-.8.3-1m0-1c-.4 0-.7.2-.9.6-.1.1-.1.3-.2.4-.3-.1-.5-.2-.8-.2-.4 0-.7.2-.9.5s-.2.7 0 1c.1.1.1.4.2.6.1.4.2.9.5 1.3s.8.7 1.4.7c.9 0 1.8-.5 2.3-1.2.3-.5.4-1 .3-1.5-.1-.2-.2-.5-.6-1-.2-.2-.4-.6-.4-.7-.2-.3-.5-.5-.9-.5z"
              />
              <path
                className="st12"
                d="M789.7 443c-.4-.4-.8-.8-1.3-1.2-.3.6-.6 1.1-1 1.6"
              />
              <path
                className="st12"
                d="M788.7 444c0-1.4-.3-2.8-.8-4.2M785.1 443.3c-.1-.5-.3-1.1-.4-1.7-.5.3-1.1.6-1.7.8"
              />
              <path className="st12" d="M783.7 443.5c.7-1.2 1.3-2.5 1.7-3.9" />
              <path
                className="st13"
                d="M789.2 433.7c.7-1.1 1.9-2.2 2.4-2 1.9.9 2.9 9.2-1.3 8.4"
              />
              <path
                className="st14"
                d="M784.7 427c-2.1 1.3-2.1 4.5-.7 5.7-4.5 6.3-.2 8.7 2.9 8.8 1.7.1 4.9-1.4 5-4 0-2.5-2.4-3.8-2-5.6.6-4.1-2.1-6.8-5.2-4.9z"
              />
              <path
                className="st15"
                d="M784.6 431.8c-.2.2 0 .5.2.4.8-.2 1.8-.4 2-.5.1 0 .5-.5.2-1.1 0 0 0-.1-.1-.1-.3-.4-.8-.3-1.2 0-.2.5-.7 1-1.1 1.3z"
              />
              <path className="st16" d="M787.6 429.2v.8M785.6 429.2v.7" />
            </g>
            <g id="photo_studio_x5F_off" onMouseEnter={()=>setActivePhotoStudio(true)} style={{display: isActivePhotoStudio? "none" : "block"}}>
              <path
                className="st20"
                d="M837.3 664.3c-.5 5.5-4.7 9-12.6 9.3-7.2.3-14-2.9-13.5-10.9.5-7.2 6.7-12.7 13.9-12.2s12.9 6.6 12.2 13.8z"
              />
              <path
                className="st21"
                d="M830.4 653.9c-.9 3.6-2.5 6.9-6.2 7.2s-6.3-2.5-7.3-6.1c-.8-2.6-8.2-22-6.6-32 .5-3.3 9.4-6.2 10.3-6.2.9-.1 10.1 1.3 11.2 4.5 3.1 9.6-.8 30-1.4 32.6z"
              />
              <path
                className="st20"
                d="M871 645.5c-.1 4.2-3.2 7.2-9.2 7.9-5.5.6-10.8-1.7-10.8-7.9 0-5.5 4.5-10 10-10s10.1 4.4 10 10z"
              />
              <path
                className="st21"
                d="M865.2 637.8c-.5 2.8-1.6 5.4-4.4 5.8-2.8.4-4.9-1.6-5.9-4.3-.7-2-7.3-16.4-6.6-24.1.2-2.5 6.9-5.2 7.6-5.3.7-.1 7.8.5 8.7 2.9 3 7.2 1 23 .6 25z"
              />
              <path
                className="st20"
                d="M730.5 645.5c.1 4.2 3.2 7.2 9.2 7.9 5.5.6 10.8-1.7 10.8-7.9 0-5.5-4.5-10-10-10-5.6-.1-10.1 4.4-10 10z"
              />
              <path
                className="st21"
                d="M736.3 637.8c.5 2.8 1.6 5.4 4.4 5.8 2.8.4 4.9-1.6 5.9-4.3.7-2 7.3-16.4 6.6-24.1-.2-2.5-6.9-5.2-7.6-5.3-.7-.1-7.8.5-8.7 2.9-3 7.2-.9 23-.6 25z"
              />
              <path
                className="st20"
                d="M765.2 664.6c.5 5.5 4.7 9 12.7 9.2 7.2.2 14-3 13.5-11-.5-7.2-6.7-12.7-13.9-12.2-7.4.5-13 6.8-12.3 14z"
              />
              <path
                className="st21"
                d="M771.7 654c.9 3.6 2.5 6.9 6.3 7.2 3.7.3 6.3-2.6 7.3-6.1.8-2.6 8.2-22 6.5-32-.6-3.3-9.4-6.1-10.3-6.2-.9 0-10.1 1.3-11.2 4.6-3.3 9.4.8 29.8 1.4 32.5z"
              />
              <path
                className="st20"
                d="M867.8 608.9c0 14.9-29.9 26.9-66.8 26.9s-66.8-12-66.8-26.9c0-6.9-.1-26.2 0-26.2 13.4 0 47-.8 66.7-.8 21.6 0 56.9-9.4 66.7.3.3.3.2 20.5.2 26.7z"
              />
              <ellipse className="st21" cx={801} cy={583.8} rx={66.8} ry={26.9} />
              <path
                className="st20"
                d="M852.4 582.1c0 10-23 18.5-51.4 18.5s-51.4-8.5-51.4-18.5c0-3.7-3.6-37.1-3.6-37.1 12.2-10.8 37.2-10.3 55-10.3s43.5-1.6 55 9.9c.1.2-3.6 33.8-3.6 37.5z"
              />
              <path
                className="st21"
                d="M867.3 544.9c0 12.9-29.7 23.3-66.3 23.3s-66.3-10.5-66.3-23.3c0-1.8-.2-9 0-8.9 8.7 8.7 34.9-14.4 66.4-14.4 30.6 0 53.7 12.6 66.2 12.6.1-.1 0 8.5 0 10.7z"
              />
              <ellipse className="st20" cx={801} cy={535.5} rx={66.3} ry={23.3} />
              <path
                className="st21"
                d="M817.1 626.9c4.7-.2 9.3-.7 13.9-1.6-.7-3.4 1.2-6.6-4.4-5.8-7.8.6-10.1-1.3-9.5 7.4zM837.4 619.3c4.6-.6 9.2-2.4 13.6-3.7-1-3.3.5-6-5.1-4.9-7.6 1.6-10 1.9-8.5 8.6z"
              />
              <path
                className="st21"
                d="M807.6 623.2c4.7 0 9.3-.3 13.9-1.1-.6-3.4 1.5-6.5-4.1-6-7.8.3-10.1-1.6-9.8 7.1zM754.6 620.1s7.9 3.1 9.5 2.9c.1-1.4.9-5.2.9-5.2l-9.6-2.3-.8 4.6z"
              />
              <path
                className="st21"
                d="M762.7 618.5s8.7 3.1 10.3 2.9c.1-1.4 1-3.3 0-4.8-2.6-1.3-9.1-2.4-9.1-2.4l-1.2 4.3zM739.4 608.4c.6 1 5.8 3.7 6.9 3.6.2-1.3 1-3.2.6-4.8-1.7-1.5-4.2-3.8-5.9-3.3-1 .3-1.6 1.5-1.6 4.5z"
              />
              <ellipse className="st5" cx={801} cy={525.5} rx={66.3} ry={23.3} />
              <path
                className="st5"
                d="M862 534.9v9.2M862 517.3v9.2M851.7 541.3v8.4M851.7 511.8v8.4M838.6 544.8v9.2M838.6 507.1v9.3M822.4 548v9.2M822.4 503.5v9.2M740.2 534.9v9.2M740.2 516.9v9.2M750.4 541.3v8.4M750.4 511.2v8.4M763.6 544.8v9.2M763.6 506.9v9.2M780.6 548v9.2M780.6 503.7v9.2M800.7 549.3v9.2M800.7 502v9.3"
              />
              <path
                className="st22"
                d="M843.7 523.8c.8.9 2.4.9 3.3 0-.3 2.4 2.9 4.4 5 3.2 1.4 1.1 1.5 2.8 3.6 2.5.5 0 1.4-1 1.4-1.5 1.4 1 3.7.7 4.6-.7.9-1.4-.2-3.8-2-3.8 1.9-.1 3.3-2.2 2.6-4-.6-1.7-3-2.6-4.6-1.6 1.3-1.3.5-3.7-1.2-4.5s-3.7-.3-5.2.8c.5-1.3-.8-2.8-2.3-3-1.5-.1-2.8.6-4 1.5-.8-.9-1.5-1.7-2.5-2.2s-2.4-.5-3.2.2c-.5.4-.9 1.2-1.5 1-.3 0-.5-.3-.8-.5-1-.9-2.7-.9-3.7 0-.1-1.2-1-2.3-2.2-2.6-1.2-.3-2.5.3-3.1 1.3-.5-1.5-2.1-2.7-3.8-2.7s-3.3 1.1-3.7 2.6c-1.4-1.4-3.5-2.3-5.5-2s-3.7 1.9-3.9 3.8c-.1 2 1.6 4 3.6 3.8 0 2 1.4 4 3.4 4.7s4.3 0 5.5-1.7c.9 1.5 2.7 2.3 4.4 2.1s3.1-1.6 3.5-3.3c.1 1.5 1.6 2.7 3.1 2.6 1.5-.1 2.7-1.5 2.6-3-.6 1.1.5 2.5 1.7 2.7s2.4-.4 3.4-1c.2 1.2.8 4.6 1.5 5.3z"
              />
              <path
                className="st21"
                d="m807.7 519.7-35.9 16.4-10.8-8.2v-29l46.2-6.1 11.3 7z"
              />
              <path className="st20" d="m818.6 528-46.6 8.2v-29.8l46.6-6.6z" />
              <path
                className="st20"
                d="M808.2 516.4c0 5.4-6.6 15.8-11.5 16.5-.5 0-9.8-7.6-9.8-13s3.9-9.5 8.8-10.3c4.9-1 12.5 6.3 12.5 6.8z"
              />
              <ellipse
                transform="rotate(-64.165 802.051 523.936)"
                cx={802.1}
                cy={524}
                rx={10.3}
                ry={8.4}
                style={{
                  fill: "#cfcfcf",
                  stroke: "#222",
                  strokeWidth: 2.8803,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10.0015,
                }}
              />
              <ellipse
                transform="rotate(-64.165 802.47 524.12)"
                className="st15"
                cx={802.5}
                cy={524.1}
                rx={5.2}
                ry={4.3}
              />
              <ellipse
                transform="rotate(-80.294 796.673 498.36)"
                className="st15"
                cx={796.7}
                cy={498.4}
                rx={1.2}
                ry={1.7}
              />
              <ellipse
                transform="rotate(-80.294 801.36 497.742)"
                className="st15"
                cx={801.4}
                cy={497.8}
                rx={1.2}
                ry={1.7}
              />
              <ellipse
                transform="rotate(-80.294 805.67 496.964)"
                className="st15"
                cx={805.7}
                cy={497}
                rx={1.2}
                ry={1.7}
              />
              <path className="st5" d="m772 506.8-11-7.9" />
              <path
                className="st21"
                d="M777 502c6 .4 4.1-8.4-1.3-8.2-8.3.1-4.5 7.7 1.3 8.2z"
              />
              <circle className="st19" cx={814} cy={505.7} r={1.4} />
              <path
                className="st24"
                d="M775.7 510.3v1.3c0 .8.7 1.4 1.5 1.3l3.5-.5c.6-.1 1.1-.6 1.1-1.3v-1.2c0-.8-.7-1.4-1.4-1.3l-3.5.4c-.7.1-1.2.6-1.2 1.3z"
              />
              <path className="st20" d="m846.7 535.2-40 7.4-3.5-3.5 40-7.4z" />
              <path className="st3" d="m809.6 576.5-2.6-4.1-3.1 4.5" />
              <path
                className="st25"
                d="M813.8 576.3c-.5 4.6-.7 9.3-.5 13.9-4-.7-8.2 0-12.2.2-.6-3.4-.8-13.5.4-13.8 1.4-.3 12.2-.1 12.3-.3z"
              />
              <path
                className="st3"
                d="M805 581.8c-.5-3.8 6.6-1.7 2 1.7-.5.4-.3.8-.2 1.5M807 586.9c.1 0 .1 0 0 0M790.7 577.4l-1.9-4.9-2.2 5"
              />
              <path
                className="st26"
                d="M785.6 576.4c-3.8-1.8-5.6 3.4-4 6.7 1.2 2.9 3.6 4.4 5.5 6.5.9 1 2.2 1 3.2 0 10.8-10.7 3.5-19-1.4-9.6-1.2 1.2-1.5-2.7-3.3-3.6z"
              />
              <path
                className="st3"
                d="M785.6 583.7c.1.1.1-.1 0 0M788.6 583.7c0 .1 0-.1 0 0M791.3 583.7c0 .1 0-.1 0 0"
              />
              <path className="st27" d="m847 576.8-6.6 8.5-7.1-7.6 7.1-8.4z" />
              <path
                className="st3"
                d="M840.4 569.2v-2.1M838.8 576c-.2-3.7 6.5-1.2 1.8 1.7-.5.3-.3.7-.3 1.4M840.4 581c0 .1 0 0 0 0M824.2 570.8v3.7"
              />
              <path
                className="st28"
                d="M830.1 580.7c0 3.8-2.6 7.2-5.9 7.2-3.3 0-5.9-2.7-5.9-6.5s2.6-7.2 5.9-7.2 5.9 2.7 5.9 6.5z"
              />
              <path
                className="st3"
                d="M824.3 577.4c-.3.8-.4 3.3-.2 4.9M824.2 584.3s0 .1.1.2"
              />
              <path
                className="st22"
                d="M758.7 585.5c-.7-.9-2.1-1.2-3-.4.6-2.2-2.1-4.5-4.2-3.6-1.2-1.2-1.1-2.8-3.1-2.8-.5 0-1.4.8-1.6 1.2-1.2-1.1-3.4-1.2-4.4.1-1.1 1.3-.3 3.6 1.3 3.8-1.8-.1-3.4 1.7-3 3.5.3 1.7 2.5 2.8 4.1 2.1-1.4 1.1-1 3.5.5 4.4 1.4 1 3.4.7 4.9-.1-.7 1.2.4 2.8 1.8 3.1 1.3.3 2.7-.3 3.9-1 .6.9 1.2 1.8 2.1 2.4.9.6 2.2.8 3 .1.5-.3 1-1 1.6-.8.3.1.4.3.6.6.8 1 2.4 1.2 3.5.5-.1 1.2.6 2.3 1.7 2.7 1.1.4 2.4 0 3.1-.9.3 1.5 1.6 2.8 3.2 3 1.5.2 3.2-.7 3.9-2.1 1.2 1.5 3 2.5 4.8 2.5 1.9 0 3.7-1.3 4.2-3.2.4-1.8-1-4-2.9-4.1.3-1.9-.8-4-2.5-4.8-1.7-.9-4-.4-5.4 1-.6-1.5-2.2-2.5-3.8-2.5s-3.2 1.2-3.7 2.7c0-1.4-1.2-2.8-2.5-2.8-1.4-.1-2.8 1.1-2.9 2.5.7-1-.1-2.4-1.2-2.8-1.1-.3-2.4.1-3.4.6 0-.9-.1-4.3-.6-4.9zM815.2 598.4c-.2 1.5 1.6 2.9 3.1 2.3-1.2 1-.6 3 .9 3.6s3.3-.1 4.3-1.3c1.1 1.1 2.8 1.5 4.4 1.2 1.5-.3 2.9-1.4 3.4-2.8 1.8.7 3.9.8 5.8.3 1-.2 1.9-.7 2.5-1.4s.7-1.8.1-2.5c1.6-.5 2.5-2.4 1.7-3.9-.8-1.4-3.1-1.9-4.5-1-.8-.9-1.9-1.7-3.2-1.8s-2.7.4-3.2 1.5c-1.2-1-3-1.6-4.7-1.2-1.6.4-3 1.9-2.6 3.4-.5-1-1.8-1.5-2.9-1.2-1.6.4-1.2 1.7-2.2 2.5-1 .9-2.6.5-2.9 2.3zM853.4 578.2c-.7-.1-1.5-.1-2.2.3s-1 1.3-.6 1.9c-1.2-.2-2.5.4-3.1 1.5s-.4 2.5.5 3.5c-1 .2-1.4 1.4-1.2 2.4s1.2 1.7 2.1 2.1c1 .4 2.4.4 3.1-.4.7 1.1 2.3 1.5 3.5 1.1s2.2-1.6 2.4-2.9c1.1.5 2.4.2 3.1-.7.7-.9.7-2.3 0-3.2.8-.2 1.1-1.2 1.1-2 0-1.4-.8-2.9-2.1-3.5s-2.8 0-3.5 1.2c-1.1-.6-2-1.1-3.1-1.3z"
              />
            </g>
            <g id="building_x5F_off" onMouseEnter={()=>setActiveBuilding(true)} style={{display: isActiveBuilding? "none" : "block"}}>
              <path
                className="st29"
                d="M624.1 509.7s3.7 136.4-37.7 246.2l49.2 48.6 49.2-13.8 20.2-61.2 73.8 53.6.2-3.5 1.1-16.4 17-4.7S750 639.6 740.2 512.8l-116.1-3.1z"
              />
              <path
                className="st29"
                d="m624.1 509.7 42.6 20.3 73.4-17.2-48.2-16.3z"
              />
              <path
                className="st5"
                d="M635.6 804.5C666.8 587.2 666.7 530 666.7 530"
              />
              <defs>
                <path
                  id="SVGID_00000147939600609429543800000017372058381141890449_"
                  d="M624.1 509.7s3.7 136.4-37.7 246.2l49.2 48.6 49.2-13.8 20.2-61.2 73.8 53.6.2-3.5 1.1-16.4 17-4.7S750 639.6 740.2 512.8l-116.1-3.1z"
                />
              </defs>
              <clipPath id="SVGID_00000031921506911550267190000003489052798446057385_">
                <use
                  xlinkHref="#SVGID_00000147939600609429543800000017372058381141890449_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <g
                style={{
                  clipPath:
                    "url(#SVGID_00000031921506911550267190000003489052798446057385_)",
                }}
              >
                <path
                  className="st5"
                  d="m741.6 524-74.7 18.6-42.9-22.2M746.8 546.5 664.2 567l-43.5-24.2"
                />
                <path className="st5" d="m752 569-90.6 22.5-44-26.2" />
                <path className="st5" d="m757.1 591.6-98.5 24.3-44.5-28.2" />
                <path className="st5" d="m762.3 614.1-106.5 26.2-45-30.2" />
                <path className="st5" d="m767.5 636.6-114.4 28.1-45.6-32.2" />
                <path className="st5" d="m772.7 659.1-122.4 30-46.1-34.1" />
                <path className="st5" d="m777.9 681.6-130.4 32-46.6-36.2" />
                <path className="st5" d="M783 704.1 644.7 738l-47.1-38.2" />
                <path className="st5" d="M788.2 726.6 642 762.4l-47.6-40.2" />
                <path className="st5" d="m793.4 749.1-154.2 37.7-48.1-42.2" />
              </g>
              <path
                className="st31"
                d="M742.9 725.9c-25.8 1.5-49.1 29.5-51.9 65.9-.5 6.4-.3 18.5-.3 18.5l-17.1-17.1c.2-.1-.1-12 .3-18.5 2.8-36.4 26.1-60.6 51.9-62.2 6.2-.4 13.8.6 19.1 3.7 8.4 5 17.9 15.2 20.7 18.2 2 2.3-8.1-9.3-22.7-8.5z"
              />
              <path
                className="st31"
                d="M744.5 736.7c18.4 0 32.4 20.3 34.4 47.4l6.2-1.9c-.9-31.8-18.6-56.2-42.1-56.2-25.9 0-49.1 29.5-51.9 65.9-.5 6.4-.3 18.5-.3 18.5l10.9-3.3c0-3.4.1-7.4.3-10.3 2.1-33.2 21.2-60.1 42.5-60.1z"
              />
              <path
                className="st32"
                d="M668.3 522.9h0c-2.7-.4-4.7-2.9-4.3-5.7l1.6-11.3c.4-2.7 2.9-4.7 5.7-4.3h0c2.7.4 4.7 2.9 4.3 5.7l-1.6 11.3c-.4 2.8-2.9 4.7-5.7 4.3zM640.3 512.1h0c-1.9-.2-3.2-2-2.9-3.9l1.5-11c.2-1.9 2-3.2 3.9-2.9h0c1.9.2 3.2 2 2.9 3.9l-1.5 11c-.2 1.8-2 3.1-3.9 2.9zM723 512.7h0c2.1-.9 3-3.3 2.1-5.4l-3.9-9c-.9-2.1-3.3-3-5.4-2.1h0c-2.1.9-3 3.3-2.1 5.4l3.9 9c.9 2.1 3.3 3 5.4 2.1z"
              />
              <path
                className="st32"
                d="M731.2 494.5c0 8.4-23 16.4-51.5 16.4s-51.5-8-51.5-16.4c0-4.9 11.6-46.6 11.8-46.8 7.9-7.9 28.1 5 39.6 5 14.7 0 28.6-12.9 39.6-5 .8.5 12 42.8 12 46.8z"
              />
              <ellipse
                cx={679.8}
                cy={448.9}
                rx={39.9}
                ry={11.8}
                style={{
                  fill: "#7865ff",
                  stroke: "#222",
                  strokeWidth: 2.88,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                className="st34"
                d="M722.4 484.3c-1.3 0-2.5-.5-3.4-1.3-.8-.8-1.2-1.8-1.2-2.9 0-1.7 1.2-2.9 2.8-2.9.7 0 1.5.2 2.3.7.3.1.6.2.9.2.6 0 1.2-.3 1.6-.9.1-.3.2-.5.2-.7h-.2c-.4 0-1 0-1.6.1-.7.1-1.5.1-2.2.1-.6 0-2.4 0-3.5-1.3-.8-.9-1-2.2-.8-3.8.4-2.5 1.8-4.8 3.9-6.1 1.5-1 2.9-1.4 4.4-1.4 2.7 0 4.4 1.7 4.6 3.4.1 1.2-.6 2.4-2.3 2.7h-.6c-.5 0-1-.1-1.5-.3h-.4c-1.1 0-2.2.8-2.5 1.3.3 0 .7-.1 1.1-.2.9-.2 1.9-.4 2.9-.4 3 0 4 1.9 4.4 3.5v.2l.1 1.4v.2c-.3 3.9-4 7.8-7.9 8.3-.4 0-.8.1-1.1.1z"
              />
              <path
                className="st15"
                d="M725.6 465.6c3 0 4.2 2.9 2.1 3.3h-.3c-.3 0-.7-.1-1-.2s-.6-.1-1-.1c-2.2 0-4.9 2.2-3.8 3.6.3.3.7.5 1.1.5h.2c1.2-.2 2.6-.6 3.9-.6 1.4 0 2.5.5 3 2.4 0 .4.1 1 .1 1.4-.2 3.4-3.5 6.6-6.6 6.9h-.8c-3.6 0-4.1-4.2-1.8-4.2.4 0 1 .1 1.6.5.5.3 1.1.4 1.6.4 1.1 0 2.2-.6 2.8-1.6 1-2.3.1-2.8-1.3-2.8-1.1 0-2.5.3-3.8.3-1.8 0-3.3-.6-2.8-3.4.3-2.2 1.6-4 3.3-5.1 1.2-1 2.4-1.3 3.5-1.3m0-2.9c-1.7 0-3.5.6-5.2 1.7-2.4 1.6-4.1 4.2-4.6 7.1-.3 2.1 0 3.7 1.1 4.9l.6.6c-.7.8-1.2 1.8-1.2 3.1 0 1.4.6 2.8 1.6 3.9 1.2 1.2 2.7 1.8 4.5 1.8.4 0 .8 0 1.2-.1 4.6-.5 8.8-4.9 9.1-9.6v-2.2c-.3-1.4-1-2.6-2-3.4.8-.8 1.2-1.8 1.1-3-.4-2.8-3.1-4.8-6.2-4.8z"
              />
              <path
                className="st19"
                d="M636.8 485.2c-1.8 0-3.7-1-5.3-2.6-2.1-2.3-3.2-5.4-3-8.4v-1c.1-1.6.4-3.1 1-4.4 1.4-3.3 3.5-3.9 5-3.9 3.5 0 6.6 3.6 7.2 6 .3 1.4-.1 2.5-1.2 3.1-.3.1-.7.2-1.1.2-.8 0-1.5-.4-2-1.1-1.1-1.5-1.9-2-2.2-2-.4 0-1.1 1.3-1.1 3.4 0 1.2.2 2.3.7 3.1.5.9 1.2 1.1 1.5 1.1.4 0 .9-.1 1.4-.4.3-.1.7-.2 1.1-.2h.5c.9.2 1.5.9 1.9 1.8.3.7.2 1.6-.1 2.3-.7 1.9-2.4 3-4.3 3z"
              />
              <path
                className="st15"
                d="M634.6 466.3c3.5 0 7.2 5.4 5.3 6.4-.1 0-.2.1-.4.1-.3 0-.6-.2-.8-.4-1.3-1.8-2.4-2.5-3.4-2.5-3.5 0-3.7 10.4 1.1 10.4.6 0 1.3-.1 2.1-.5.1 0 .3-.1.4-.1h.2c.4.1.8.4 1 1 .1.3.1.8 0 1.1-.8 1.5-2 2.2-3.2 2.2-3.3 0-7.2-4.4-6.9-9.5v-1c0-1.3.3-2.7.9-3.9 1-2.5 2.3-3.3 3.7-3.3m0-2.9c-1.6 0-4.5.6-6.3 4.8-.6 1.5-1 3.1-1.1 4.9v.9c-.2 3.4 1 7 3.4 9.5 1.8 2 4.2 3.1 6.3 3.1 2.4 0 4.6-1.4 5.8-3.8.5-1.1.6-2.4.1-3.5-.5-1.4-1.6-2.3-2.9-2.6-.3-.1-.6-.1-.9-.1-.6 0-1.1.1-1.7.4-.5.2-.7.2-.8.2 0 0-.4-.4-.6-1.5-.2-.9-.1-1.8 0-2.4.1.2.3.4.6.7.7 1.1 1.9 1.7 3.2 1.7.6 0 1.2-.1 1.7-.4 1.7-.9 2.4-2.7 1.9-4.8-.8-3-4.5-7.1-8.7-7.1z"
              />
              <path
                className="st34"
                d="M694.5 492.8c-.6 0-1.3-.2-1.9-.6-.1-.1-.3-.2-.4-.4-.9-1.3-.4-2.4-.1-3.4.1-.3.2-.6.3-1 3.5-11.5 4.9-14.8 7.4-14.8 2.1 0 3.3 2.5 5.5 7.5.8 1.8 1.7 3.8 2.8 6.1.6 1.3.4 2.9-.5 3.9-.7.7-1.3.8-1.8.8-1.5 0-2.5-1.4-3.3-2.5v-.1c-1.2.2-2.1.3-2.7.3-.8.1-1.2.1-1.4.2-.3.2-.7 1.2-1.4 2.4l-.1.3c-.1.2-.2.4-.4.5-.8.6-1.4.8-2 .8z"
              />
              <path
                className="st15"
                d="M699.7 474.1c1.7 0 3.4 5.3 7.1 12.8.4.7.3 1.6-.3 2.3-.2.3-.5.4-.8.4-1 0-2-1.8-2.7-2.7-6.1 1.2-5.1-.5-7.5 4.2-.3.2-.6.3-1 .3s-.7-.1-1.1-.4c-.6-1 0-1.6.4-3.1 3-9.9 4.5-13.8 5.9-13.8m-1.8 10.5c1.4-.2 2.6-.4 4-.7-.8-1.4-1.5-2.8-2.3-4.2-.5 1.6-1.1 3.2-1.7 4.9m1.8-13.4c-3 0-4.4 3.2-5.1 4.9-.9 2.1-2 5.4-3.7 10.8v.1c-.1.3-.2.6-.3.8-.4 1-1 2.7.3 4.6.2.3.5.6.8.9.9.6 1.8.9 2.7.9 1 0 1.9-.3 2.7-.9.3-.3.6-.6.8-1l.1-.3c.3-.7.7-1.4 1-1.8h.7c.5 0 1.2-.1 1.9-.2.9 1.2 2.2 2.5 4 2.5 1.1 0 2.1-.4 2.8-1.3 1.4-1.4 1.7-3.6.8-5.5-1.1-2.3-2-4.3-2.8-6.1-1-2.2-1.7-3.8-2.4-5.1-.4-.9-1.8-3.3-4.3-3.3z"
              />
              <path
                className="st19"
                d="M685.5 493.5c-2.2 0-4.2-.9-5.7-2.5-1.7-1.8-2.5-4.3-2.3-7 .8-9 5.9-10 8.1-10 2.9 0 6 1.7 6.8 3.8.4 1.1.2 2.2-.6 3-.6.5-1.3.8-2.1.8-.7 0-1.4-.2-2-.7-.7-.5-1.2-.8-1.7-.8-.1 0-.5 0-1 .5-.8 1-1.2 2.8-1 4.5v.1c.1 1.2 1 2.2 2.1 2.2h.3c.5 0 .7-.2 1.2-.6.3-.2.7-.6 1.3-.9.5-.2 1-.4 1.5-.4 1.3 0 2.3.8 2.5 1.9.4 1.6-.8 3.7-2.6 4.7-1.7 1-3.3 1.4-4.8 1.4z"
              />
              <path
                className="st15"
                d="M685.6 475.5c3.5 0 6.7 2.8 5.1 4.3-.3.3-.7.4-1.1.4-.4 0-.8-.1-1.2-.4-1-.8-1.9-1.2-2.6-1.2-2.5 0-3.9 3.6-3.5 6.7.1 2 1.7 3.5 3.5 3.5h.5c1.3-.2 1.7-1 2.9-1.6.2-.1.5-.2.8-.2 2 0 1.3 2.8-.7 3.9-1.3.8-2.7 1.2-3.9 1.2-3.9 0-6.9-3.5-6.5-7.9.6-6.6 3.7-8.7 6.7-8.7m0-2.8c-2 0-8.5.8-9.5 11.3-.2 3 .8 6 2.7 8 1.8 1.9 4.1 2.9 6.7 2.9 1.8 0 3.6-.5 5.3-1.5 2.4-1.3 3.8-4 3.3-6.3-.4-1.8-2-3-3.9-3h-.1c-.7 0-1.5.2-2.2.6-.7.3-1.2.7-1.5 1-.1.1-.3.3-.4.3h-.1c-.2 0-.6-.3-.6-.9v-.1c-.2-1.5.3-3 .7-3.4.1 0 .4.2.8.5.8.7 1.9 1.1 2.9 1.1 1.2 0 2.2-.4 3-1.2 1.2-1.2 1.6-2.9 1-4.6-1.1-2.7-4.6-4.7-8.1-4.7z"
              />
              <path
                className="st19"
                d="M712.4 489.4c-1.1 0-2.2-.8-2.5-1.9-.8-2.3-.9-4.8-1.1-7.2-.1-1.2-.1-2.3-.3-3.4-.8.1-1.6.3-2.4.3-1.2 0-2-.3-2.5-1.1-.2-.3-.6-1.1-.1-2.2.3-.8 1-1.5 1.9-1.9 1.7-.8 3.7-1.3 5.7-1.9.4-.1.8-.2 1.2-.4.8-.2 1.5-.3 2.2-.3 2.2 0 3.2 1.2 3.3 2.3 0 .8-.2 2.5-3.6 3.5.1.9.3 2.1.5 3.2.8 5 1.5 9.7-1.4 10.8-.3.2-.6.2-.9.2z"
              />
              <path
                className="st15"
                d="M714.6 471c2.6 0 2.9 2.3-1.8 3.2-.2 3 2.7 12.8.1 13.7h-.3c-.5 0-1-.3-1.2-.9-1.2-3.6-.8-8-1.5-11.9-.7.2-2.4.7-3.6.7-1 0-1.7-.3-1.2-1.2.2-.5.7-.9 1.2-1.2 2-.9 4.5-1.5 6.7-2.2.4-.1 1-.2 1.6-.2m0-2.9c-.8 0-1.7.1-2.6.4-.4.1-.8.2-1.2.4-2 .6-4 1.2-5.9 2-1.2.5-2.1 1.5-2.6 2.6-.5 1.2-.4 2.5.2 3.5.5.8 1.6 1.7 3.7 1.7.4 0 .8 0 1.2-.1 0 .6.1 1.2.1 1.8.1 2.5.3 5.1 1.2 7.5.6 1.7 2.1 2.8 3.9 2.8.4 0 .9 0 1.2-.2 2.1-.7 3.2-2.8 3.1-6.1 0-1.9-.4-4.2-.7-6.2-.1-.6-.2-1.3-.3-2 .5-.2 1-.5 1.4-.7 2.1-1.4 2.2-3.2 2.1-3.8-.3-2.4-2.6-3.6-4.8-3.6z"
              />
              <path
                className="st34"
                d="M643.8 487.8c-.8 0-1.5-.3-2.1-.8-.5-.5-.8-1.2-.8-2v-.4c.1-.9.1-2.6.1-4.3 0-5.5.1-9.2 1.6-10.7.5-.5 1.1-.7 1.7-.7.3 0 .6 0 .9.2.8.3 1.4.9 1.7 1.7 1.2 3.1.5 11.4-.3 14.8-.3 1.3-1.4 2.2-2.8 2.2z"
              />
              <path
                className="st15"
                d="M644.3 470.3c.1 0 .3 0 .4.1.4.1.7.5.8.9 1 2.6.4 10.5-.3 14-.2.8-.8 1.2-1.4 1.2-.7 0-1.4-.5-1.4-1.4v-.2c.4-3.5-.8-14.5 1.9-14.6m0-2.9c-1 0-2 .4-2.7 1.2-1.9 1.9-2 5.7-2 11.7 0 1.6 0 3.3-.1 4.1v.6c0 1.2.4 2.2 1.2 3s1.9 1.2 3.1 1.2c2.1 0 3.8-1.4 4.3-3.4.8-3.5 1.5-12 .2-15.6-.4-1.2-1.3-2.2-2.5-2.6-.6-.1-1-.2-1.5-.2z"
              />
              <path
                className="st19"
                d="M654 491.9c-.6 0-1.2-.2-1.8-.7-.7-.5-1.1-1.2-1.2-2.1-.2-2.4 0-4.9.1-7.2.1-1.2.2-2.4.2-3.7 0-.1 0-.2-.1-.2-2.7-.7-4.2-1.7-4.6-2.9-.2-.7 0-1.5.6-2.1.5-.6 1.3-.9 2.2-.9H650c3.3.4 6.9.9 10.2 2.2 1 .3 1.7 1.2 2 2.1.3 1 0 1.6-.3 2-.8 1-2.2 1-2.6 1-.6 0-1.2 0-2.1-.2v2.5c0 2 0 4.3-.2 6.1-.3.8-.7 4.1-3 4.1z"
              />
              <path
                className="st15"
                d="M649.3 473.4h.2c3.2.4 6.9.9 10.1 2.1.5.2 1 .6 1.1 1.2.2.9-.5 1.1-1.5 1.1-.8 0-1.7-.1-2.4-.3h-.1c-.4 0-.8.3-.9.8-.2 3.5.5 12.1-1.7 12.1-.2 0-.6-.1-.9-.4-.3-.3-.6-.7-.6-1.1-.4-3.5.2-7.1.3-10.8 0-.8-.5-1.4-1.2-1.6-1.8-.5-4.4-1.5-3.4-2.7.2-.2.6-.4 1-.4m0-2.9c-1.2 0-2.4.5-3.3 1.4-.9 1-1.2 2.3-.9 3.5.5 1.6 2 2.8 4.7 3.6 0 .9-.1 1.7-.2 2.7-.2 2.4-.4 4.9-.1 7.5.1 1.2.8 2.4 1.7 3.1s1.8 1 2.7 1c.7 0 2.6-.2 3.6-2.5.3-.8.6-1.7.7-3 .2-1.9.2-4.2.2-6.3v-.9h.7c1.7 0 3-.5 3.8-1.6.7-.9.9-2.1.5-3.2-.4-1.4-1.5-2.5-2.9-3-3.4-1.3-7.2-1.8-10.5-2.2h-.2c0-.1-.3-.1-.5-.1z"
              />
              <path
                className="st34"
                d="M668 493.8c-.7 0-1.3-.2-1.8-.7-1.6-1.3-1.4-3.5-1.2-5.3.1-1.3.3-2.6-.2-3.3 0 0-.1-.1-.1-.2-.5-.9-1.1-1.7-1.6-2.4-.8-1.1-1.6-2.2-2.3-3.7-.4-.9-.4-1.9 0-2.7.5-.8 1.2-1.3 2.1-1.3 1.7 0 3.2 1.7 5 4.6h.2c2-2.6 3.4-3.7 4.8-3.7.5 0 1.8.2 2.4 2 .2.8.2 1.6-.2 2.4-.6 1.2-1.4 2.2-2.3 3.2-.7.9-1.4 1.8-2 2.7-.1.6 0 1.4 0 2.3.1 2.4.4 5.7-2.4 6.1 0-.1-.2 0-.4 0z"
              />
              <path
                className="st15"
                d="M662.9 475.6c1.1 0 2.7 2.2 3.8 3.9.3.5.8.7 1.3.7s.9-.2 1.2-.6c1.1-1.5 2.6-3.2 3.6-3.2.4 0 .8.3 1 1 .1.4.1.9-.1 1.2-1.2 2.1-2.9 3.7-4.2 5.9-.1.2-.2.4-.2.6-.3 2.2 1 6.8-1.2 7.2h-.2c-.3 0-.7-.1-.9-.3-2-1.6.6-6.1-1.2-8.4-1.3-2.3-2.7-3.6-3.8-6-.2-.4-.2-1 0-1.4.3-.4.6-.6.9-.6m0-2.9c-1.4 0-2.6.8-3.3 2.1-.7 1.2-.7 2.7-.1 4 .8 1.6 1.6 2.8 2.4 3.9.5.8 1.1 1.5 1.5 2.3 0 .1.1.2.2.3.1.3 0 1.6 0 2.3-.2 1.9-.5 4.8 1.7 6.6.8.6 1.7 1 2.7 1 .2 0 .5 0 .8-.1.9-.2 3-.9 3.5-4 .2-1.2.1-2.4 0-3.6 0-.6-.1-1.3 0-1.7.5-.8 1.1-1.5 1.7-2.3.8-1.1 1.7-2.1 2.4-3.4.6-1.1.7-2.4.3-3.6-.9-2.7-3.1-3-3.7-3-1.6 0-3 .9-4.8 2.9-1.8-2.3-3.3-3.7-5.3-3.7z"
              />
              <path
                className="st32"
                d="M677.8 405.4h0c-1.7 0-3-1.3-3-3v-14.8c0-1.7 1.3-3 3-3h0c1.7 0 3 1.3 3 3v14.8c0 1.6-1.3 3-3 3z"
              />
              <circle className="st4" cx={677.8} cy={382.1} r={7.5} />
              <path
                className="st29"
                d="M688.3 402s6.3-8.4 14.7-9.3c0 0 5.4 3.2 2.7 18.3 0 0 10 9.5 4.6 24.1s-18 15-25.4 15.6c-8.4.6-27.7 2-33.7-9.7-2-3.8-4.2-9.8-1.4-18.5 0 0-8.1-9.4-2-24.3 0 0 6.6-2.8 18.7 9.3 0 0 .9-3.6-1.9-9.4 0 0 5.4 1.6 8.8 9.1 0 0 .6-5.9 3.2-9.3 0 0 1.5 5.3 5.7 9.7 0 0-1-9.7 4.9-12.5 0 0-.4 8.6 2.4 10.8"
              />
              <path
                className="st5"
                d="M651.4 405.6c-2.2 4.7.2 8.6 2.3 10.1M655.6 407.4c.9 1.1 1.7 2.2 2.3 3.5M653.2 418c.2-1 .8-1.8 1.4-2.6 1.7-2.2 3.9-3.9 6.4-5.1M697.2 402.9c-1 .7-1.7 1.9-1.9 3.2M700.7 398.2c2.4 4.9.8 8.6.1 10.1M693.7 405.8c2.7 2 5.8 3.4 9.1 4.1M671.5 422.3v6.6M689.9 422.3v6.6"
              />
              <ellipse className="st15" cx={681.9} cy={432.9} rx={3.7} ry={2.7} />
              <path
                className="st5"
                d="M673.1 435.7c-.3 5.8 8.6 5.7 9-.1-.5 4.8 8.7 5.7 9.5.1M642.4 425.9c1.5 4.4 8.2 6.2 10.7 4.7M640.9 434.1c2.9 2 8 3.9 10.9 1.7M644.7 443c3.6.6 7.4-.8 9.8-3.6M706.8 423.2c3.7.7 7.8-1 10-4.1M707.7 428c3 1.3 6.4 1.6 9.6.7M707.5 433.3c2.5 1.8 5.8 2.5 8.8 1.9"
              />
              <ellipse
                transform="matrix(.9997 -.02503 .02503 .9997 -8.896 17.034)"
                cx={676}
                cy={363.9}
                rx={48.3}
                ry={12.3}
                style={{
                  fill: "none",
                  stroke: "#fee56e",
                  strokeWidth: 4.8466,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10.0003,
                }}
              />
              <ellipse
                transform="rotate(-86.037 676.082 363.956) scale(.99999)"
                cx={676.1}
                cy={364}
                rx={3.9}
                ry={15.2}
                style={{
                  fill: "none",
                  stroke: "#fee56e",
                  strokeWidth: 4.8463,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 9.9997,
                }}
              />
              <ellipse
                transform="matrix(.01882 -.9998 .9998 .01882 299.431 1033.051)"
                cx={676.1}
                cy={364}
                rx={12}
                ry={43.7}
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 1.3217,
                  strokeMiterlimit: 9.9994,
                }}
              />
              <path
                d="M664.2 363.4c.1-1.7 6.3-2.8 11.9-2.5 5.7.3 11.7 2 11.6 3.7-.1 1.7-6.3 2.8-11.9 2.5-5.6-.4-11.7-2-11.6-3.7z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 1.3217,
                  strokeMiterlimit: 10,
                }}
              />
              <ellipse className="st39" cx={676} cy={363.9} rx={44.8} ry={12.3} />
              <ellipse className="st39" cx={676} cy={363.9} rx={13.1} ry={3.9} />
            </g>
            <g id="shop_x5F_off" onMouseEnter={()=>setActiveShop(true)} style={{display: isActiveShop? "none" : "block"}}>
              <path
                className="st40"
                d="m1095 493.4 1.6 109.7 89.8 37 74.9-45.8.6-40.5s-14.2-22.3-26.2-25.7l-29.8-9.2V501l-15.7-5.6V478l-18.6-22-76.6 37.4z"
              />
              <path
                className="st5"
                d="m1185.2 638.8.6-45.8s-14.2-22.3-26.2-25.7l-29.8-9.2v-17.9l-15.7-5.6v-17.4l-18.6-23.2M1115.2 517.1l75-39M1130.9 540.1l75-39M1115.2 534.5l75-39M1130.9 558l75-39"
              />
              <path
                className="st6"
                d="m1127.5 606-.4-27.1 51.3 19v28.7c0-.1-50.3-20.6-50.9-20.6z"
              />
              <path
                style={{
                  fill: "#c6c6c6",
                  stroke: "#222",
                  strokeWidth: 2.88,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1232.7 611.6v-40.4l20.6-11.6v39.5z"
              />
              <path className="st6" d="M1192.4 597.3v29.6l32-18.1v-27.5z" />
              <path className="st5" d="m1173.9 566.6 59.3-32.8" />
              <path
                className="st42"
                d="m1107.9 566.9 53.1 19.9M1117.2 564.2l53 19.9M1096 550.3l30.7 11.5M1096 569l30.7 11.5M1096 575.9l30.7 11.6M1122.2 560.2v5.4M1104.2 553.8v5.5M1116.5 570.9v5.4M1109.8 581.6v5.4M1102 571.9v5.5M1122.8 579.8v5.5M1128.2 569v5M1149.8 582.3v-5.6M1096 556.4l14.8 5.5M1096 582.4l23.2 8.7"
              />
              <path className="st5" d="M1243.1 566v38.9" />
              <path
                className="st22"
                d="M1193.7 524.5c-.6 1.8 1.5 4 3.4 3.4-1.7 1-1.3 3.6.5 4.6s4.1.4 5.6-.8c1.2 1.5 3.3 2.4 5.2 2.3 2-.1 3.8-1.2 4.7-2.9 2.2 1.2 4.7 1.7 7.2 1.5 1.2-.1 2.5-.5 3.4-1.3s1.2-2.2.6-3.2c2.2-.3 3.6-2.6 2.9-4.5s-3.5-2.9-5.4-2.1c-.9-1.3-2.1-2.4-3.6-2.9-1.6-.4-3.5 0-4.2 1.3-1.4-1.5-3.5-2.5-5.6-2.4s-4 1.8-3.9 3.7c-.4-1.3-2-2.3-3.4-2.1-2.1.2-1.9 1.9-3.2 2.8-1.6 1.1-3.5.4-4.2 2.6z"
              />
              <path
                className="st43"
                d="m1168.5 525.7 6.7 13.7 17.1 7.5 12.2-6.9-18-7.2-6.4-12.7z"
              />
              <path
                className="st3"
                d="m1175.2 539.4-2.6 3.9M1192.4 550.5l-.1-3.6M1204.5 540l1.4 2.9M1171.2 530.1l10.9-5.5M1173.4 534.4l10.3-5.2M1175.6 538.8l10.8-5.9M1179 540.7l11.4-5.8M1183.9 542.7l11.3-5.7M1188.8 544.8l11.4-5.8"
              />
              <path
                className="st43"
                d="m1149.6 535.2 6.7 13.6 17.1 7.5 12.2-6.8-18-7.3-6.4-12.7z"
              />
              <path
                className="st3"
                d="m1156.3 548.8-2.6 3.9M1173.4 560v-3.7M1185.6 549.5l1.4 2.9M1152.3 539.5l10.9-5.5M1154.5 543.8l10.3-5.1M1156.7 548.3l10.8-5.9M1160.1 550.1l11.4-5.7M1164.9 552.1l11.5-5.7M1169.9 554.3l11.4-5.8M1212.5 499.7l-.7 24.3"
              />
              <path
                className="st44"
                d="m1212.3 486.2-11.5 17.5s.5 3.9 4.2 5.6l7.3-23.1z"
              />
              <path
                className="st45"
                d="m1212.3 486.6-6.9 22.6s.8 6.4 4.4 2.8l2.5-25.4zM1212.4 486.2l7.2 22.8s-1.3 6.4-4.9 2.8l-2.3-25.6z"
              />
              <path
                className="st44"
                d="m1212.4 486.1 11 17.6s-.2 3.5-3.9 5.2l-7.1-22.8zM1212.4 486.4l-2.5 25.1s2.1 7 4.7.2l-2.2-25.3z"
              />
              <path className="st3" d="m1212.3 482.6-.3 3.7" />
              <path
                className="st46"
                d="M1128.4 491.6c1.3 2.4.3 6.4-1.8 7.6-2.1 1.2-4.9.3-6.3-2-1.3-2.4-1.5-6.5.6-7.8 2.1-1.2 6.1-.1 7.5 2.2z"
              />
              <ellipse
                transform="rotate(-30 1124.072 491.649)"
                className="st47"
                cx={1124.1}
                cy={491.6}
                rx={4.5}
                ry={4.9}
              />
              <path
                className="st46"
                d="M1146.9 482.2c1.3 2.4.3 6.4-1.8 7.6-2.1 1.2-4.9.3-6.3-2-1.3-2.4-1.5-6.5.6-7.8 2.1-1.2 6.2-.1 7.5 2.2z"
              />
              <ellipse
                transform="rotate(-30 1142.567 482.251)"
                className="st47"
                cx={1142.6}
                cy={482.2}
                rx={4.5}
                ry={4.9}
              />
              <path
                className="st46"
                d="M1165.9 473.1c1.3 2.4.3 6.4-1.8 7.6-2.1 1.2-4.9.3-6.3-2-1.3-2.4-1.5-6.5.6-7.8 2.1-1.2 6.1-.1 7.5 2.2z"
              />
              <ellipse
                transform="rotate(-30 1161.458 473.148)"
                className="st47"
                cx={1161.5}
                cy={473.1}
                rx={4.5}
                ry={4.9}
              />
              <path
                className="st48"
                d="m1104.6 529-17.6 9.2c-1.5.8-3.3.2-4.1-1.2h0c-.8-1.5-.2-3.3 1.2-4.1l17.6-9.2c1.5-.8 3.3-.2 4.1 1.2h0c.8 1.5.2 3.3-1.2 4.1zM1104.6 546.3l-17.6 9.2c-1.5.8-3.3.2-4.1-1.2h0c-.8-1.5-.2-3.3 1.2-4.1l17.6-9.2c1.5-.8 3.3-.2 4.1 1.2h0c.8 1.5.2 3.3-1.2 4.1zM1075 525.3l16.9-8 7.3 2.4-16.2 8.3z"
              />
              <path
                className="st48"
                d="m1083 528 16.2-8.4v34.5l-16.7 9.6s.5-35.4.5-35.7z"
              />
              <path
                className="st24"
                d="M1094.5 538.2v.5c0 1.9.1 3.7.2 5.6 0 .7-.1 1.2-.7 1.4-2 .9-3.9 1.9-5.9 2.8-.6.2-.6-.3-.6-.8 0-1.9-.1-3.7-.2-5.6 0-.2-1.5-1.1-2-1.4-.3-.2-.3-.4 0-1 .6-1 1.2-1.9 1.7-2.8.2-.3.4-.6.8-.7.4-.1.8-.3 1.1-.5.4-.2.6 0 .7.3 0 .2.1.4.3.5.7.5 2.2-.2 2.4-1.7 0-.4.2-.7.5-.9.4-.2.9-.4 1.3-.6h.5c.7.4 2.2 1.7 2 2.1-.3.8-2 2.8-2.1 2.8z"
                id="QPPU6E_3_"
              />
              <path className="st48" d="M1075 525.3v36l7.5 2.5v-35.9z" />
              <path
                className="st49"
                d="M1137.7 583.1v16.7l-10.2 6.2v-27.1zM1214.2 586.8v16.7l10.2 5v-27.1z"
              />
              <path
                className="st49"
                d="m1137.7 599.8-10.2 6.2 50.9 20.5v-10.8zM1192.4 626.9l32.1-18.5-10.2-4.9-21.6 11.9c-.1 0-.3 12.2-.3 11.5z"
              />
              <path
                className="st22"
                d="M1087.8 601.3c-.6-.5-1.2-1.1-1.3-1.7s.4-1.5 1.2-1.5c-1.2-.4-2-1.6-1.7-2.7.3-1.1 1.7-1.8 3-1.6-.6-1.6-.1-3.6 1.5-4.6s4.3-.7 5.2.9c.5-1.4 3-1.5 4.4-.5 1.3 1 1.6 2.6 1.6 4.1 1.2-.8 2.4-1.6 4-1.5 1.5.1 2.9 1.6 2 2.6 1.3-.9 3.6-.4 4.4.9 1.1-.9 3-.8 4.1 0 1.1.9 1.2 2.5.1 3.4 1.3-1.1 3.5-1.3 5.1-.6s2.7 2.3 2.5 3.8c1.1-1.2 3.2-1.5 4.8-.7 1.5.8 2.2 2.6 1.4 3.9 1.6.3 2.7 1.8 2.4 3.1-.3 1.3-2.1 2.2-3.6 1.9 1.5 1 2.1 2.9 1.2 4.3-.9 1.4-3 2.2-4.8 1.6.2 1.6-.5 3.4-2.2 4s-4.2-.5-4-2.1c-.9 1.5-2.9 2.4-4.9 2.3-2-.1-3.9-1.3-4.6-2.9-1.1 1.2-3.1 1.6-4.8 1.1-1.7-.5-2.9-2-2.9-3.5-1.1 1-3.2.8-4.5-.1-1.2-1-1.7-2.4-2.1-3.7-.5.7-1.7.7-2.5.4-.9-.3-1.4-1.1-2-1.7-1-1.2-.6-2.4-1.2-3.6-.6-1.2-1.2-1-2.2-1.8-.8-.7-1.8-1.2-1.4-2.3-.1-.4 1-1.8 1.8-1.2zM1135.1 622.6c0 .9 1 1.8 1.8 1.5-1.1.4-2.1.8-2.9 1.5-.8.8-1.3 2-.9 3 .8 1.8 3.4 1.6 5.3 1.1-.5 1.6.3 3.4 1.8 4.2 1.4.8 3.4.4 4.5-.9-.4 1.9 1.5 3.8 3.5 3.5-.1 1.3.8 2.7 2.1 3.3 1.2.5 2.8.1 3.7-.9 2.5 3.3 7.6 4.4 11.3 2.3.7 2.3 4 3.1 5.8 1.5 1.6 2.7 5.4 3.8 8.3 2.5.2 1 1.2 1.8 2.2 1.9 1 0 2.1-.7 2.4-1.7 1.6-.5 2.9-2 3.2-3.6.2-1.7-.5-3.5-1.9-4.5.8-1.5 1-3.4.2-4.9s-2.9-2.3-4.3-1.3c-.4-2.2-3.4-3.5-5.3-2.2 1.1-1.7 1-4-.2-5.6s-3.5-2.2-5.4-1.5c-.5-1.8-2.3-3.1-4.1-3.1-1.8 0-3.6 1.4-4 3.2-1.1-1.5-3.1-2.4-4.9-2.2-1.9.2-3.6 1.5-4.4 3.2.1-1.4-1.2-2.7-2.6-2.8s-2.7.7-3.7 1.7c.1-2.9-2.6-3.6-4.8-3-2.2.3-6.8 1.2-6.7 3.8z"
              />
              <path
                className="st50"
                d="M1131.9 581.1c.6 6.1-.9 18.3 1 21.7 1.9 3.6 3.8 3.1 9.2 3.4 6 .3 5.9 6.5 12.3 5.9 6-.6 7.2 3.6 9.7 3.9 2.8.4 5.6.1 7.1.3 5.6.6 3.5 4.7 7 4.6l-.1-23.3-46.2-16.5z"
              />
              <path className="st51" d="M1142.8 603.3v-9.8M1157 608v-12.3" />
              <path
                style={{
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 1.8428,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1161.6 610.3v-8.6"
              />
              <path
                className="st50"
                d="M1192.7 619.2c1.3 1.1 3.3 1.6 4.6.4.4-.4.7-1 1-1.5.7-1.3 1.8-2.7 3.2-2.7 1.1 0 2.2.8 3.3.7.9-.1 1.7-.9 2.1-1.7s.7-1.8 1.2-2.5c.9-1.4 2.7-2.2 4.4-1.9 1.1.2 2.4.7 3.2-.1.9-.8.2-2.3 1.2-2.9 1.6-1.1 3.8 2 4.1-1 .2-2.3.2-20.8.1-22.4l-28.3 13.8-.1 21.8z"
              />
              <path
                className="st51"
                d="M1200.7 599.3v12.5M1210.1 596.4v10.1M1213.4 598.4v5.7"
              />
            </g>
            <g id="market_x5F_off" onMouseEnter={()=>setActiveMarket(true)} style={{display: isActiveMarket? "none" : "block"}}>
              <path
                className="st53"
                d="M1157.4 661.3c-5.7-7.5-290.4 24.8-290.4 24.8l.2 101.1c.4-.1-.9.4-.6.6 13.3 7.7 26.6 15.4 40 23.1l130.1-39.5c7.4 15.9 31.2 29.9 59.3 29.9 34.1 0 61.7-17 61.7-38-.1-20.9.5-100.9-.3-102z"
              />
              <path className="st5" d="M906.6 811V690.6" />
              <path
                className="st54"
                d="M1126.4 628.5c-9.5 0-261 43.9-261 43.9l.1 14.7 41 23.7 129.7-37.5c7.4 15.9 31.5 27.5 59.7 27.5 34.1 0 61.7-16.6 61.7-37.5 0-21.1 2.9-34.8-31.2-34.8z"
              />
              <path
                className="st55"
                d="M1096 610.5c-9.5 0-18.4 1.3-26.4 3.6h0l-204 58.2 41 23.7 130.1-37.1c7.4 15.9 31.2 27.5 59.3 27.5 34.1 0 61.7-17 61.7-38-.1-20.9-27.7-37.9-61.7-37.9z"
              />
              <path
                className="st56"
                d="M1097.7 617.8c-7.4 0-17.3 1.4-22.7 2.5-6.7 1.3-189.4 53.5-189.4 53.5l22.5 12.5 134.1-38.3c.4.8 8.1 29.4 55.5 29.4 26.7 0 48.4-13.3 48.4-29.8s-21.7-29.8-48.4-29.8z"
              />
              <path
                className="st5"
                d="M1144.7 654.2c-.1-17.2-21-30.2-46.6-30.2-7.1 0-16.6 1.3-21.7 2.4-6.5 1.3-182.6 51.6-182.6 51.6M911.2 665.9V679M931.1 660.3v13M989.6 644.3v13.1M1003.6 640.1v13.1M1035.4 630.5v13"
              />
              <path
                className="st15"
                d="M1048.8 601.2c-.4-.5-1.2-1-2.5-1.2h-.8c-.7 0-1.3.1-1.9.2-3.5.9-6.5 1.7-9.4 2.5-1.8.6-3.5 1-5.3 1.5-.5.1-1 .3-1.5.5-.4.1-1.1.4-1.6.8-.6.3-1.2.9-1.6 1.2-.6.6-1.1 1.2-1.2 1.9-.2.6-.2 1.1-.2 1.5 0 .8.1 1.6.5 2.2-.3 0-.5.1-.8.1s-.6.1-.9.2c-.3.1-.6.1-.9.2h-.2c-2.1.5-3.9 1.1-6.1 1.7-2.2.7-4.6 1.3-4.7 1.4-.8.2-1.4.6-2.1 1.2-.6.4-1.2-1-1.3-1.4-.1-.3-.4-.6-.7-.8-.3-.3-.6-.5-.9-.7 0 0-.1 0-.1-.1-.1 0-.2-.1-.3-.2-.6-.2-1.2-.4-1.7-.4-.3 0-.5 0-.8.1-.8.1-1.6.5-2.3 1.1-.7.5-1.4 1.1-2 1.8-.3.3-.6.7-1 1.1-.1.2-.3.3-.4.5l-.1.1c-1 1.2-2.1 2.2-2.1 1.9 0-.2-1.7-2.1-2.2-2.5 0 0-.1-.1-.2-.1-.6-.4-1.2-.6-1.9-.6h-.8c-.3 0-.7.1-1.1.2-.1 0-.2 0-.3.1-.6.3-1.2.6-1.9 1.2s-1.2 1.2-1.5 2c-.4.8-.6 1.6-.7 2.4v.6c0 .4-.1.7-.1 1v.4c-.1 1.1-.2 2-.2 3-.4-.6-1-1.1-1.5-1.5-.6-.5-1.3-.7-1.9-.9h-.1c-.4-.1-1-.2-1.5-.2-.4 0-.8-.1-1.3-.1-1.2 0-2.6.2-4.3.6-1.6.4-3.3.8-4.8 1.2l-2.4.6c-1.5.4-2.6 1-3.4 1.9-.4.4-.6.9-.9 1.4-.1.4-.4.9-.5 1.4s-.1.9-.2 1.3l-1.4 19.8-4.1-16.6c-.1-.2-3.4-3.1-3.7-3.4-.4-.5-1-.8-1.7-1h-.8c-1.2 0-2.5.4-3.6 1.1 0 0-.1 0-.1.1-.5.4-.9.8-1.2 1.2-.2.3-.5.8-.8 1.2-.3.5-.5.9-.6 1.3 0 .1-.1.2-.2.4l-.3.6-.3.7-7.2 17.4v-1.2c.1-1.9.2-3.9.4-5.9.1-2 .2-4 .4-5.9.1-1.6.2-3.1.3-4.7.1-1.5 4.3-3.3 3.2-5-.2-.3-3.8-3.5-4.3-3.9 0 0-.1-.1-.2-.1-.6-.4-1.2-.6-1.9-.6h-.6c-.3 0-.8.1-1.3.3-2.4.7-4.2 3.7-5.8 6.4-1.7 3-2.7 4.7-3.7 6.4-.3-.5-.7-1.2-1.1-1.8 0-.1-.1-.2-.2-.3-.9-1.3.8-.4 0-1.2 0 0-3.3-3.1-3.6-3.3-.6-.6-1.5-1.2-2.7-1.2h-.4c-.4 0-.8.1-1.3.3-.8.2-1.5.6-2.2 1.2-.8.7-1.2 1.4-1.4 2v.1c-.2.6-.6 1.4-.6 2.4-.3 2.4-.6 4.8-.8 7.3l-.4 5.6-.5 6.4-.3 3.3c0 .8 0 1.6-.1 2.4v.1c0 .9.3 1.9.9 2.6.3.5 3.9 4.2 6.4 5.1 1.4.5-.5-4.4.6-5.6 1-1 1.5-2.4 1.7-3.6.1-.4.1-.9.2-1.4.1-.8.2-1.9.3-3.4.2-2.1.4-4.6.5-6.9.3.3.5.6.8.9.4.4 1.6 1.8 3.4 1.8.4 0 .8-.1 1.2-.2 1.3-.5 2.3-1.3 3.7-3.4l-.2 2.9-.2 3.3v.5c-.1 1.2-.2 3.6 1.3 5 .3.3 3.7 3.6 4.2 3.8.1 0 0-3.2.8-3.6.3-.1.6-.3.8-.4 0 0 0 .1-.1.2-.1.3-.3.8-.3 1.1v.2c0 .3-.1.7-.1 1.2 0 .9.1 1.6.6 2.3s3.6 3.8 4.4 4c3.5-1 .3-2.6 1.1-3h.1c.6-.3 1.2-.8 1.7-1.3.1-.1.2-.2.3-.4 0 0 0-.1.1-.1.4-.5.6-1 .8-1.3l.3-.6c0-.1.1-.2.1-.3.2-.3.3-.7.4-.9.1-.2.1-.4.2-.5v-.2l.6-1.3c2.1-.6 4.3-1.2 6.4-1.8.6-.1 1.2-.3 1.7-.5 0 .1 0 .2.1.3.1.5.3.9.5 1.1.1.2.2.3.2.5 0 .1.1.2.2.3v.1c.1.2.4.6.9 1 .2.2.4.3.5.4.6.4 1.3-.9 2.2-.9 0 0 0 1.5.1 1.5h.2c1.2-.1 2.3-.6 3.3-1.5.7-.5 1.2-1.2 1.3-1.5 0 0 0-.1.1-.2.2.2.4.4.7.6.1 0 .2.1.3.1.5.2 1 .3 1.5.3h.4c1.3-.1 2.4-.6 3.4-1.4 1-.9 1.7-2.1 2-3.3 0-.3.1-1 .2-1.4V654.3l.4-6c.2 0 .4-.1.6-.1.5-.1.9-.2 1.4-.4l3 5.8c.2.5.4.9.6 1.2 1.6 2.5 5.9 5.9 6.1 6 .6.2.6-4.1.6-4.1.4-.3.9-.6 1.2-1l.1-.1a5 5 0 0 0 1.1-1.6c.2-.6.3-1.2.3-1.8 0-.3-.1-.7-.1-.9.3.2.6.3.8.4h.2c.3.1.7.1 1 .1.9 0 1.7-.2 2.5-.7.7-.3 1.2-.7 1.8-1.2l.1-.1v-.1c.2-.3.7-.8.9-1.5.2-.4.3-.8.4-1.2V646.7c0-.2.1-.6.2-.9v-.4l.2-3.8 3.7 3.2.4.4.1.1.4.4c.3.3.7.5.9.7 0 0 .1.1.2.1.3.2.8.4 1.3.6.3.1.7.2 1.2.2.3 0 .5 0 .8-.1.7-.1 1.3-.4 1.9-.8.2-.1.4-.3.6-.5v.1c0 .5.1 1 .1 1.2 0 .1.1.3.1.5 0 .1.1.2.1.2 0 .1.1.2.2.4.4.7 1 1.2 1.8 1.5.4.1 3.1 3.5 3.6 3.5s-1.2-3.4-.6-3.6c1.6-.5 1.8-.5 3.9-1.1 2.3-.6 4.5-1.2 6.6-1.9H1018.9l.9-.3c.3-.1.6-.2 1-.3.9-.2 1.6-.6 2.4-1.1.7-.4 1.3-.9 1.8-1.6v-.1c.5-.7 4.3-.7 4.4-1.5 0-.1-4.1-3.8-4.8-4.4-.1-.1-.2-.1-.3-.2-.5-.3-1.1-.4-1.6-.5h-1.5c-.4 0-.9.2-1.4.3l-1.9.5-4.9 1.3.3-3.6 6-1.7 1.9-.5c.5-.1 1-.3 1.4-.5.4-.1.8-.4 1.2-.6.6-.3 1.1-.7 1.4-1.2.5-.6.9-1.2 1.1-1.9.1-.5.2-1.1.2-1.4.1-1.1-.2-2-.9-2.7l-.1-.1c-.7-.6-1.5-1-2.5-1.1h-.4c-.5 0-1.2 0-2 .2h-.1c-.2.1-.5.1-.8.2-.3.1-.7.1-1 .3h-.2c-1.6.4-2.9.8-4.4 1.2l.1-2 6.6-1.9 1.8-.5c.4-.1.9-.2 1.5-.5.3-.1.7-.3 1.1-.5 0 0 .1 0 .2-.1.4-.3.7-.5 1-.7l.1-.1.3-.3c.3-.4.8-1.1 1-1.8.1-.5.2-1 .2-1.3 0-.8-.1-1.5-.5-2.2.3 0 .5 0 .7-.1.5 0 1.5-.3 2.6-.6l-1.3 18.4c0 .1 0 .7.1 1.3 0 .5.2.9.4 1.3.3.7.8 1.2 1.1 1.4.1 0 4.2 3.8 4.2 3.8.5.3.6-3.8 1.5-4.5 0 0 .1 0 .1-.1.6-.5 1.1-1.1 1.3-1.7l.1-.2.3-.6v-.1c.1-.3.2-.7.3-1.1 0-.3.1-.5.1-.8.1-.4.1-.8.1-1V628.3l.2-3.2c.3-4.1.5-7.2.7-9.7.2-2.2.3-4 .4-5.5.4-.1.9-.3 1.3-.4l2-.6c.4-.1.9-.2 1.4-.4h.1c.1 0 .2-.1.3-.1.3-.1.7-.3 1.1-.5.5-.3 1-.6 1.3-.9.1 0 .1-.1.2-.2.5-.6.8-1.2 1-1.7v-.2c.1-.5 3-.3 2.8-.6.5.2-2.4-2.4-3.1-3.1zm-140.1 66.5h-.2.2c.1 0 0 0 0 0zm4.1-30.6zm6.8 16.2zm8.2 9s.1 0 0 0c.1 0 .1 0 0 0zm3.8-30.5h.2-.2zm2.9 35.9zm11.7-16.8c0-.1.1-.3.2-.4 0 .1.1.2.1.3l-.3.1zm8.1 11.3c-.1 0-.1 0 0 0-.1 0 0 0 0 0zm7.6-2.1h.2-.2zm12.2-24.3c-.1 1-1.4 2.4-2.5 2.6l-2.4.7c.1-1.1.1-2.1.2-3 1.2-.3 2.5-.7 3.6-.9.4-.1.7-.1 1-.1h.3c-.2.1-.2.4-.2.7zm2.1-8.2c.1 0 .1 0 0 0h.4c-.2 0-.2-.1-.4 0zm1.7 28h-.2.2zm3.9-13.3-.2 3.3v2.1l-1.9-3.9c.8-.7 1.5-1.4 2.2-2.3l-.1.8zm3.5 7.6c.1 0 0 0 0 0zm17-33.9h.2-.2zm-2.4 29.4zm5.2-23.7c0 .5-.1 1-.1 1.5v.4l-.1.9c-.1 1.4-.2 2.7-.4 4.4l-.4 5.6-.3 4c-.3-.3-.6-.7-.9-.9l-.1-.1c-1.4-1.4-2.6-2.5-3.8-3.6-.6-.5-1.5-1.3-2.5-2.2l6.7-8.4.5-.7s0-.1.1-.1l.2-.2c.1-.2.3-.4.5-.6.3-.4.6-.8.8-1.1.2-.2.3-.5.4-.7-.4.6-.5 1.2-.6 1.8zm1.8 26.5c.1-.1.1 0 0 0zm15.9-21.9h.3-.3zm1-11.7h.2-.2zm2.7-2.7h-.3.3s.1 0 0 0c.1 0 .1 0 0 0zm18.6-9.7h.4-.4z"
              />
              <path
                className="st57"
                d="M912.9 673.1c-1.3 0-2.8-.9-3.1-3.2V669c.5-7.7 1-16.4 1.9-24.2 0-.9.4-1.6.6-2.2v-.1c.9-1.8 2.4-2.7 4.4-3h.3c1.4 0 2.3 1 2.8 1.6l.4.4c1.2 1.1 2.1 2.7 2.9 4.2.5.9 1 1.8 1.5 2.5.9-1.2 1.7-2.9 2.6-4.6 2-3.8 4.1-7.8 6.9-9.1.1 0 .2-.1.4-.1h.2c.3-.1.7-.2 1.2-.2s1.1.1 1.5.4c0 0 .1 0 .1.1.2.2.6.6.9 1.2v.2c.1.4.1.8.1 1.1v.2c-.2 2.8-.3 5.8-.5 8.5-.3 6-.5 12.3-1.6 18.3 0 .1 0 .2-.1.3-.2.5-.5 1-.9 1.3-.4.5-.9.8-1.5 1.1-.7.4-1.4.6-2.2.6-.3 0-.5 0-.8-.1h-.2c-2.3-.9-2.1-3.4-2-4.9v-.8c.2-2.7.4-5.9.6-8.9-2.3 3.9-3.9 5.8-5.9 5.8-1.8 0-3.1-1.6-4.8-4 0 .9 0 1.7-.1 2.4-.5 7.2-.8 9.9-1 11.1 0 1.2-.5 2.4-1.5 3.4-.7.9-2 1.6-3.1 1.6z"
              />
              <path
                className="st15"
                d="M935.9 635.7c.2 0 .5 0 .8.2.2.1.3.3.4.6 0 .3.1.6.1.9-.6 8.8-.5 18-2 26.7-.1.3-.4.7-.6.9-.3.3-.6.6-1.1.8-.6.3-1.1.5-1.5.5h-.5c-1.4-.5-1.1-2.5-1-4 .3-4 .6-9.2.9-13.2 0-.3-.2-.5-.4-.5-.3 0-.8.5-1.3 1.6-2.8 5.1-4.4 7.2-5.8 7.2-1.5 0-2.9-2.3-5.3-5.8h-.2c-1.1 0-.5 4-.9 5.3-.4 5.1-.9 11.3-1 11.4 0 1.7-2 3.6-3.5 3.6-.8 0-1.5-.5-1.7-1.9.5-7.9 1.1-16.8 2-24.8 0-.6.2-1.2.5-1.7.6-1.2 1.6-2 3.3-2.2h.1c1 0 1.6 1.2 2.2 1.7 2.2 2 3.5 6.6 5.6 7.8 3.1-3.4 6.1-12.8 9.9-14.5.2-.5.6-.6 1-.6m0-2.9c-.7 0-1.2.1-1.5.2h-.1c-.2 0-.5.1-.7.2-3.2 1.5-5.4 5.7-7.5 9.7-.4.9-.9 1.7-1.3 2.5-.1-.1-.2-.3-.2-.4-.9-1.6-1.8-3.3-3.2-4.6 0 0-.1-.2-.2-.3-.6-.7-1.8-2.2-3.9-2.2h-.4c-2.5.3-4.4 1.5-5.5 3.7 0 0 0 .1-.1.2-.2.6-.6 1.5-.7 2.6-.9 7.8-1.4 16.5-1.9 24.2v1.2c.2 2.3 1.7 4.5 4.5 4.5 1.5 0 3.2-.7 4.4-2 1.2-1.2 1.9-2.6 1.9-4.1 0-.3.1-.7.1-1.2 0-.7.1-1.5.2-2.7.1-1.8.3-4.1.5-6.2 1.1 1.1 2.2 1.7 3.7 1.7s2.8-.7 4.1-2.1c-.1 1.3-.2 2.5-.2 3.7v.8c-.1 1.5-.3 5.1 2.9 6.3.1 0 .3.1.4.1.4.1.7.1 1.1.1 1 0 1.9-.2 2.8-.8.7-.3 1.3-.8 1.9-1.4.4-.5.8-1.1 1.1-1.7.1-.2.1-.4.2-.7 1.1-6.1 1.3-12.4 1.6-18.5.1-2.8.2-5.7.4-8.5v-.4c0-.4-.1-.8-.2-1.3 0-.1-.1-.3-.1-.4-.3-.7-.7-1.3-1.3-1.8-.1-.1-.2-.1-.3-.2-.9 0-1.6-.2-2.5-.2z"
              />
              <path
                className="st57"
                d="M938.7 673c-.4 0-.8 0-1.1-.1-.6-.1-1.2-.5-1.6-1.1-.6-.9-.5-1.8-.3-2.9.1-.3.2-.7.3-1 0-.1.1-.3.1-.3v-.1l9.8-23.7c.2-.6.3-.8.6-1.4l.2-.4c.1-.4.3-.8.5-1.2.7-1.6 2.7-3.3 4.8-3.3.8 0 2.7.3 3.5 3 0 0 0 .2.1.3.1.3.3.7.4 1.1l6.9 18.9v.5c.1.3.2.7.2 1V663.5c0 .6-.2 1.2-.6 1.7-.3.5-.7 1-1.2 1.3-.9.8-1.9 1.2-2.9 1.3h-.2c-.6 0-1.2-.2-1.7-.5-.1 0-.2-.1-.4-.3 0 0-.1 0-.1-.1-.5-.4-.8-.9-1.2-1.7-.1-.2-.3-.6-.4-1.1 0-.3 0-.3-.6-.3-.7 0-1.7.2-2.6.5-.8.2-1.6.4-2.4.5-.7.2-1.4.4-2 .5-1.8.4-2.2.5-2.5 2v.1c-.2.7-.5 1.4-1.2 2.6-.1.3-.4.8-.7 1.2 0 0 0 .1-.1.1-.1.2-.2.3-.3.4-.6.6-2 1.3-3.3 1.3zm11.9-20.6c-.4.9-.8 1.7-1.2 2.5-.1.3-.3.7-.5 1.1.6-.2 1.4-.4 2.1-.6 0 0 .5-.1.6-.1v-.1c-.2-.5-.4-1-.6-1.4 0-.6-.2-1-.4-1.4z"
              />
              <path
                className="st15"
                d="M952.2 638.6c.9 0 1.7.5 2.1 1.9 0 .2.4.9.5 1.4l6.9 19v.1s0 .1.1.3c0 .2.1.5.1.7v1c0 .3-.1.7-.3 1s-.5.7-.9 1c-.7.6-1.4.9-2.2 1-.3 0-.6 0-.9-.2-.1 0-.1-.1-.2-.1s-.1-.1-.2-.1c-.3-.2-.5-.6-.9-1.3-.1-.2-.2-.3-.2-.5-.2-1.2-1-1.6-2-1.6-1.6 0-3.7.9-5.3 1-3.1 1-4.8.5-5.6 3.6-.2.7-.4 1.2-1.1 2.4-.1.3-.3.6-.6 1-.1 0-.2.2-.2.3s-.1.1-.2.3c-.5.6-1.4 1.2-2.4 1.2-.2 0-.5 0-.8-.1-.3 0-.6-.3-.8-.5-.2-.4-.3-.8 0-1.9 0-.2.1-.6.2-.8.1-.2.1-.3.1-.4v-.1l9.8-23.7c.3-.7.4-.9.8-1.8.1-.4.3-.7.5-1.1.7-1.7 2.3-3 3.7-3m-4.7 19.2c.8 0 2.4-.7 4.1-1.1 2-.5 2.3-.4 1.5-2.3-.6-1.4-1.2-2.9-1.9-4.5-.1-.3-.3-.5-.5-.5-.3 0-.6.2-.7.8-.9 2-1.8 4-2.6 5.8-.7 1.4-.6 1.8.1 1.8m4.7-22c-2.7 0-5.1 2.1-6.1 4.1-.3.5-.4.9-.6 1.3l-.2.4c-.2.5-.4.8-.6 1.4l-9.8 23.7v.2s0 .1-.1.3c-.1.4-.3.8-.4 1.2-.2 1.2-.4 2.7.5 4v.1c.6.8 1.4 1.4 2.4 1.6.5.1 1 .2 1.5.2 1.7 0 3.5-.8 4.6-2.2.1-.1.2-.2.4-.5l.1-.1c.4-.5.7-1.1.9-1.4.7-1.2 1-2 1.2-2.8v-.2c.1-.4.2-.6.2-.6.2-.1.8-.2 1.3-.3s1.2-.3 1.9-.5c.8-.1 1.7-.3 2.4-.5.6-.1 1.2-.3 1.7-.4l.3.6c.4.8.8 1.5 1.5 2.1l.1.1c.1.1.3.3.5.4.7.5 1.6.8 2.5.8h.4c1.3-.1 2.5-.7 3.6-1.6.8-.6 1.3-1.3 1.5-1.7.5-.7.7-1.5.8-2.3v-1.3c0-.4-.1-.9-.2-1.2v-.5l-6.8-18.9c-.1-.4-.3-.8-.4-1.2 0-.1 0-.1-.1-.2-.7-2.1-2.3-4.1-5-4.1z"
              />
              <path
                className="st57"
                d="M966.4 665.4c-1 0-1.9-.5-2.6-1.4 0-.1-.1-.2-.1-.3-.1-.3-.2-.5-.2-.8v-.5c0-.8.4-7.7.8-13.6.7-10.4 1.1-12.8 1.5-13.6.2-.5.4-.9.7-1.2l.2-.2c3.4-2.3 11-3.8 14.5-3.8h.6c.5 0 1.1.1 1.5.2.5.1 1.1.4 1.7.8 2.1 1.7 3.1 4.3 2.9 7.3-.2 3.5-2.1 6.9-4.9 9 .4 1.2 1.7 3.6 2.2 4.6.5.9.7 1.3.8 1.6l.3.6c.2.4.5 1.1.6 2.2 0 .5 0 1-.2 1.4-.7 1.4-2.1 2.5-3.8 2.9h-.7c-.6 0-1.1-.1-1.5-.4-.6-.4-1.1-.8-1.4-1.3 0 0 0-.1-.1-.1 0-.1-.1-.2-.2-.4-.2-.3-.4-.6-.6-1.1-.2-.4-2.3-4.4-3.2-6.2 0 0 0-.1-.1-.2-.7.2-1.4.4-2 .6-.3.1-.7.2-1.1.3-.3.9-.4 3.5-.4 4.9 0 2.2-.1 3.6-.4 4.4-.5 2-2.7 4.3-4.8 4.3zm6.4-26c0 1.8-.2 3.2-.3 4.2v.5c.4-.1.8-.2 1.3-.4.6-.2 1.4-.4 2.3-.7 1.6-.5 3.6-2.5 3.1-4.5v-.1c-.2-.1-.6-.2-1.3-.2-2.2.1-4.4.8-5.1 1.2z"
              />
              <path
                className="st15"
                d="M981.1 631.4h.5c.4 0 .9.1 1.3.2.5.1.9.3 1.2.5 4.3 3.6 2.5 11.2-2.4 14.4-1.1.3 3 7.2 3 7.5.1.2.2.5.3.7.2.3.4.8.5 1.7 0 .3 0 .6-.1.8-.4 1-1.4 1.8-2.8 2.1h-.3c-.3 0-.5-.1-.7-.2-.4-.3-.8-.6-1.1-1-.2-.4-.5-.8-.8-1.4 0 0-2.3-4.4-3.2-6.3-.4-.6-.3-1.1-.8-1.1-.2 0-.6.1-1.1.3-1.2.4-2.1.6-3.2.9-1.7 0-.9 8.7-1.6 10.2-.1 1.2-1.9 3-3.4 3-.5 0-1-.2-1.4-.8-.1-.2-.1-.6-.2-.8 0-1.4 1.3-25.9 2.1-26.5.1-.3.2-.6.4-.8 3.1-1.9 10.5-3.4 13.8-3.4m-9.6 14.3c.7 0 2.2-.5 4.8-1.3 2.3-.7 4.8-3.4 4.1-6.2 0-1-1.2-1.4-2.7-1.4-2.7 0-6.5 1.2-6.3 2.3-.1 5-1.1 6.6.1 6.6m9.6-17.1c-3.3 0-11.4 1.4-15.4 4-.2.1-.3.2-.5.4-.4.4-.7.9-1 1.5-.4.8-.6 2.1-.9 5.3-.2 2.2-.4 5.2-.7 8.8-.4 6-.8 12.9-.8 13.8 0 .2 0 .5.1.7v.1c0 .2.1.6.3 1l.3.6c.9 1.3 2.3 2 3.7 2 2.9 0 5.6-2.7 6.1-5.1.3-1 .4-2.4.5-4.7 0-1.1.1-2.8.2-3.8h.2c.3-.1.6-.1.9-.2l.8 1.6c.9 1.6 1.7 3.4 1.9 3.7.2.5.5.9.7 1.2 0 .1.1.2.2.3 0 .1.1.2.2.3.5.7 1.1 1.3 1.8 1.8.7.4 1.5.7 2.3.7.3 0 .6 0 .9-.1h.1c2.2-.5 3.9-1.8 4.8-3.7v-.1c.3-.7.4-1.4.3-2.1-.1-1.4-.5-2.3-.8-2.7l-.3-.6c-.1-.4-.4-.9-.8-1.7-.4-.7-1.2-2.3-1.7-3.5 2.6-2.4 4.4-5.8 4.6-9.4.2-3.5-1-6.4-3.4-8.4-.8-.6-1.5-.9-2.2-1.1h-.1c-.6-.1-1.3-.2-1.7-.3h-.1c-.1-.3-.4-.3-.5-.3zm-6.9 11.8c.8-.3 2.2-.6 3.4-.6-.3.9-1.2 1.7-2.1 2-.5.1-1.1.3-1.5.4.1-.6.1-1.2.2-1.8z"
              />
              <path
                className="st57"
                d="M989.6 655.2c-.3 0-.6 0-.9-.1h-.1c-.4-.1-1-.5-1.5-1.3-.1-.2-.2-.4-.2-.6-.2-.4-.3-.8-.2-1.2v-1.6c.4-5.4.8-11 1-15.8.1-2 .2-3.5.4-5.4V628.9c0-.3.1-.7.1-1.1 0-.2 0-.4.1-.6 0-.7.2-1.4.6-2.2.7-1.4 2.3-3 4.5-3 .5 0 1 .1 1.5.3.1 0 .3.1.4.2.4.3.7.8.8 1.2.4 1.1.3 2.6.1 4.8 1.5-1.9 3-3.7 4.5-5.5l.1-.1c.2-.2.3-.4.5-.6.3-.4.6-.7 1-1.1.5-.6 1.2-1.2 1.8-1.7.8-.6 1.7-1 2.6-1s1.8.3 2.4 1c.5.4.8 1 .8 1.8v.2c0 .5-.1.9-.3 1.3 0 0 0 .1-.1.2 0 .1-.1.2-.1.3-.1.2-.3.5-.5.8v.1c-.2.4-.5.7-.8 1.1-.1.2-.3.4-.5.6-.1.1-.2.2-.2.3-2.3 2.9-4.1 5-5.4 6.6-1.2 1.3-2.3 2.6-2.4 3.2.2.2.9.8 1.4 1.2 1.2 1 3.2 2.4 5.5 4.9l.1.1c.4.4.8.7 1.1 1.2.5.5.9 1.1 1.1 1.8.3.7.3 1.4-.1 2.2-.2.7-.6 1.2-1.1 1.7l-.1.1c-.3.3-.6.6-1 .9-.5.4-1 .6-1.6.7h-.6c-.6 0-1.2-.2-2-.6h-.1c-.5-.3-1-.7-1.6-1.3l-.4-.4-.6-.5c-1.8-1.6-3.3-3-4.3-3.8 0 1.9 0 4.7-.9 8-.2.6-.5 1-.8 1.3l-.1.1c-.4.5-1 .9-1.5 1.1-1 .3-1.7.5-2.4.5z"
              />
              <path
                className="st15"
                d="M1006.5 619.8c.5 0 1.1.2 1.5.7.2.1.3.4.3.8 0 .3-.1.6-.2.9-.2.3-.4.7-.6 1-.3.4-.5.8-.8 1.1-.2.3-.5.6-.7 1-11.4 14.7-10.1 8-.7 17.8l.1.1c.4.3.7.7 1.1 1.1.4.3.6.8.7 1.3.2.4.2.7 0 1.2-.1.4-.4.9-.8 1.2-.3.3-.6.6-.9.8-.3.2-.7.4-1.1.5h-.3c-.3 0-.7-.1-1.3-.4-.4-.2-.8-.5-1.4-1.2l-.4-.4c-4.3-3.9-6.1-5.5-6.9-5.5-1.2 0 .3 4.1-1.3 9.9-.1.3-.4.6-.6.9-.3.3-.7.6-1.1.8-.6.3-1.1.5-1.6.5h-.5c-.3-.1-.5-.3-.7-.6 0-.1 0-.1-.1-.2v-.3c-.1-.2-.2-.5-.2-.8v-1.6c.4-5 .7-10.7 1-15.9.1-2 .2-3.4.4-5.3v-.2c.1-.6.1-1.2.2-1.8 0-.6.2-1.2.5-1.8.5-1.1 1.7-2.2 3.2-2.2.3 0 .7 0 1.1.2.1.1.3.3.3.6.8 1.7-.8 7.7.3 7.7.4 0 1-.6 2.2-2.3 1.6-2 3.1-3.8 4.6-5.7l.1-.1c.5-.5 1-1.1 1.4-1.6s1-1.1 1.6-1.4c.3-.5 1-.8 1.6-.8m0-2.9c-1.2 0-2.4.4-3.4 1.2-.8.5-1.5 1.2-2.1 1.9-.3.3-.6.7-1 1.1-.1.2-.3.3-.4.5v.1l-.1.1c-.6.7-1.2 1.5-1.9 2.3 0-.4-.1-.7-.3-1.1-.2-.8-.6-1.4-1.3-1.9-.2-.2-.5-.4-.9-.5-.7-.2-1.3-.3-2-.3-2.4 0-4.6 1.5-5.8 3.7v.1c-.4.9-.7 1.8-.7 2.7v.6c0 .3-.1.7-.1 1v.5c-.2 2-.3 3.4-.4 5.4-.2 4.8-.5 10.4-1 15.8v1.8c0 .6.1 1.2.3 1.7.1.3.2.6.4.9.7 1.2 1.6 1.7 2.3 2 .1 0 .2 0 .3.1.4.1.8.1 1.2.1 1 0 1.9-.2 2.8-.8.7-.3 1.4-.8 2-1.4 0 0 0-.1.1-.1v-.1c.3-.3.8-1 1.1-1.8.6-2 .8-3.8.9-5.3.6.6 1.3 1.2 2 1.8l.6.5.4.4c.7.7 1.2 1.2 1.9 1.5 0 0 .1 0 .2.1.7.4 1.6.8 2.6.8.3 0 .6 0 .9-.1.8-.1 1.5-.5 2.2-1 .5-.3.9-.7 1.2-1l.1-.1c.7-.6 1.1-1.3 1.4-2.2.5-1.3.4-2.4.1-3.2-.2-.9-.7-1.7-1.3-2.4-.4-.5-.8-.9-1.2-1.2l-.1-.1c-2.4-2.5-4.4-4-5.6-5-.1-.1-.3-.2-.4-.3.4-.6 1.1-1.3 1.6-2 1.3-1.5 3.1-3.6 5.4-6.6v-.1l.2-.2c.1-.2.3-.4.5-.7.3-.4.6-.8.8-1.2.2-.3.4-.6.5-.9 0-.1.1-.2.1-.2 0-.1.1-.2.2-.3.2-.6.4-1.2.4-1.8v-.3c0-1.2-.5-2.1-1.3-2.8-.9-1.2-2.1-1.7-3.4-1.7z"
              />
              <path
                className="st57"
                d="M1011.2 653.5c-.4 0-.7 0-1-.2-.6-.2-1.1-.6-1.4-1.2-.1-.1-.1-.2-.2-.3 0 0-.1-.1-.1-.2s-.1-.2-.1-.3c-.1-.3-.1-.7-.1-1.2.2-4.8.6-10 1.1-15.2.2-2.5.4-4.8.6-7.1v-.4c0-.5.1-1 .2-1.4v-.1c.2-1.2.7-2.7 1.9-3.8.7-.6 1.4-1 2.2-1.1h.1c1.2-.3 2.5-.7 3.9-1.2 2.2-.6 4.4-1.3 6.5-1.8h.2c.3 0 .6-.1.9-.2.3-.1.6-.1.9-.2.5-.1 1-.2 1.5-.2h.7c.9 0 1.7.4 2.2 1.1.4.5.8 1.5.3 3.1-.3 1.3-1.5 2.5-3.3 3.1-3.6 1.2-6.1 1.8-7.8 2.3-1.1.3-2.2.5-2.4.7-.1.2-.1 1-.2 1.8 0 .5 0 1.2-.1 1.9.8-.2 1.9-.6 2.7-.9 1.3-.5 2.2-.8 2.8-.8.3-.1.6-.1 1-.2.3 0 .6-.1.9-.2.7-.1 1.3-.2 1.8-.2h.3c.8 0 1.5.3 2 .9l.1.1c.6.8.8 2 .5 3.3-.1.6-.4 1.1-.9 1.6-.3.4-.7.7-1.2 1l-1.2.6c-3.7 1.3-6.1 1.9-7.8 2.3-.8.2-1.7.4-1.9.5-.1.2-.1 1.1-.2 1.9 0 .9-.1 2-.2 3.4 1-.2 2.4-.7 3.8-1.1 2.4-.8 4.8-1.5 6.5-1.5.7 0 1.3.1 1.7.4 0 0 .1 0 .1.1.3.3.8.8 1 1.6v1.3c0 .7-.3 1.3-.7 2-.5.6-1 1.1-1.6 1.4-.7.5-1.4.8-2.2 1.1l-.9.3-.9.3H1022.9c-2 .6-4.4 1.2-6.8 1.9-1.3.3-2.6.7-3.7 1-.3-.1-.8 0-1.2 0z"
              />
              <path
                className="st15"
                d="M1028.2 618.4h.6c1.2 0 1.6.9 1.2 2.4-.2.9-1.1 1.7-2.4 2.1-13.2 4.5-10.7.7-11.6 9.3.1.2.5.4.9.4 1.7 0 5.3-1.8 6.4-1.8.5-.1 1.2-.3 2.1-.5.5-.1 1-.1 1.5-.1h.3c.5 0 .8.2 1.1.4.4.4.4 1.2.2 2.1 0 .3-.2.6-.6 1-.2.2-.5.5-.8.6s-.7.3-1.1.5c-13.2 4.7-9.9-.1-11.1 10.6 0 .3.3.4.8.4 2.2 0 8.4-2.7 11.1-2.7.4 0 .7 0 1 .2.2.2.4.4.5.7v.9c0 .5-.2.9-.5 1.3s-.7.8-1.2 1.1c-.6.4-1.2.7-1.9.9-.6.2-1.2.4-1.9.6h-.2c-3.1 1-7.3 2-10.5 2.9-.3.1-.7.2-1 .2-.2 0-.4 0-.5-.1-.3-.1-.5-.3-.6-.6-.1 0-.1-.2-.1-.2 0-.1-.1-.1-.1-.2 0-.3-.1-.5-.1-.8.3-7.1 1.1-15.2 1.6-22.3v-.2c.1-.6.1-1.2.2-1.7.1-.9.5-2.2 1.5-3 .4-.3 1-.8 1.8-.8 3.2-.9 6.9-2.1 10.3-2.9h.1c.6-.1 1.2-.3 1.9-.4.4-.2.8-.3 1.1-.3m0-2.8c-.7 0-1.2.1-1.8.2-.3 0-.6.1-.9.2s-.6.1-.8.2H1024.4c-2.1.5-4.3 1.2-6.5 1.8-1.4.4-2.7.8-3.9 1.1h-.2c-.9.2-1.8.7-2.6 1.4-1.2 1.1-2.1 2.7-2.4 4.7v.3c0 .4-.1.9-.1 1.4v.5c-.1 2.3-.4 4.6-.6 7.1-.4 5.1-.9 10.4-1.1 15.3 0 .7.1 1.2.1 1.6 0 .2.1.4.2.6 0 .1.1.2.1.3s.1.3.2.4c.5.9 1.2 1.5 2.1 1.8.5.2 1 .3 1.5.3.6 0 1.2-.1 1.8-.3 1.2-.3 2.4-.7 3.7-1 2.4-.6 4.8-1.3 6.8-1.9h.4l.9-.3c.3-.1.6-.2 1-.3.9-.3 1.7-.7 2.5-1.2.7-.4 1.4-1.1 2-1.8v-.1c.6-.8.9-1.7 1-2.6.1-.6 0-1.2 0-1.5v-.2c-.2-1-.7-1.8-1.5-2.4-.1 0-.2-.1-.3-.2-.7-.4-1.5-.7-2.5-.7-1.9 0-4.3.8-7 1.6-.5.2-1.2.4-1.8.6v-2.3c.3-.1.6-.1.9-.2 1.6-.4 4.1-1 7.9-2.3.5-.2 1-.4 1.4-.7.7-.4 1.2-.8 1.6-1.3.6-.7 1-1.4 1.2-2.2.4-1.8.2-3.5-.8-4.6l-.2-.2c-.5-.5-1.4-1.2-2.9-1.2h-.5c-.5 0-1.2 0-2.1.2h-.1c-.3.1-.6.1-.9.2-.3.1-.6.1-.9.2-.8.1-1.7.4-3.1.9-.2.1-.4.1-.7.2v-.7c.4-.1.9-.2 1.4-.4 1.7-.4 4.2-1.1 7.9-2.3 2.3-.8 3.8-2.3 4.2-4.1.6-2.1 0-3.5-.6-4.3-.8-1-1.9-1.6-3.2-1.7 0-.1-.2-.1-.5-.1z"
              />
              <path
                className="st57"
                d="M1037.4 639.5c-.5 0-1-.1-1.3-.3 0 0-.1 0-.1-.1-.3-.2-.7-.6-.9-1.2-.2-.4-.3-.8-.3-1.2-.1-.9-.1-1.2 0-1.7 0-.2 0-.6.1-1.2l1.2-17.7c-.5.1-1.1.3-1.5.4-1 .3-1.6.5-2.1.5-.3 0-1.1.1-1.6.1h-.2c-1.2 0-2.3-.7-2.7-1.7-.6-1.3-.1-3 1-4.2.3-.3 1-.9 1.5-1.2h.1c3.8-1.6 8.3-2.7 12.5-3.8 1.7-.4 3.3-.9 4.8-1.3h.1c.5-.1 1.1-.2 1.7-.2h.7c.9.1 1.5.4 2 .9.5.6.8 1.3.8 2.1-.1.9-.3 2.8-2.4 3.8-.9.6-2.4 1.1-4.3 1.5l-.5.1c-.4.1-.8.2-1.1.3-.3.1-.6.1-.8.2v.6c0 1.2-.2 3.4-.4 6-.3 4.1-.7 9.2-.9 13 0 .5-.1.8-.2 1.5v.2c0 .3-.1.9-.5 1.5-.6 1.5-2.4 2.7-4.1 2.9-.2.2-.4.2-.6.2z"
              />
              <path
                className="st15"
                d="M1049.7 606.1h.6c.5 0 .9.1 1.2.4.2.2.4.6.4 1-.1.9-.2 2-1.6 2.7-.9.6-3.3 1.2-4.4 1.5-2.4.7-3.1.5-2.9 2.5-.1 2.9-1.1 12.7-1.3 19 0 .4-.1.6-.3 1.6 0 .2-.1.7-.4 1.2-.4 1-1.6 2-2.9 2.1h-.5c-.2 0-.4 0-.6-.1-.2-.2-.4-.3-.5-.6s-.2-.5-.2-.8c-.1-1.2 0-1 0-2.6.3-4.7 1.2-16.8 1.3-18.7.2-.5 0-.7-.6-.7-1.2 0-3.9 1.1-4.7 1.1-.3 0-1.1.1-1.5.1h-.1c-1.8 0-2.1-2.1-.7-3.5.2-.2.8-.7 1.2-.9 5.2-2.2 11.6-3.5 17.2-5.1.4-.2.8-.2 1.3-.2m0-2.9c-.8 0-1.4.1-2 .2h-.1c-1.5.4-3.2.9-4.8 1.3-4.3 1.1-8.7 2.3-12.7 3.9-.1 0-.2.1-.3.1-.7.4-1.5 1-1.9 1.4-1.6 1.6-2.1 3.9-1.3 5.8.7 1.6 2.3 2.6 4.1 2.6h.1c.6 0 1.3-.1 1.7-.1.5 0 1.1-.1 1.9-.4l-1.1 15.6v.1c0 .5 0 .8-.1 1.1 0 .7-.1 1.1 0 2 0 .6.2 1.1.4 1.7.4.9.9 1.4 1.3 1.7.1.1.2.1.3.2.6.4 1.3.6 2.1.6h.8c2.2-.2 4.4-1.7 5.2-3.6.4-.8.6-1.5.6-1.9v-.2c.1-.8.2-1.1.2-1.6.2-3.7.6-8.9.9-13 .2-2.4.3-4.4.4-5.6.2 0 .5-.1.9-.2.1 0 .3-.1.4-.1 1.9-.5 3.5-1 4.6-1.7 2.7-1.4 3-4 3.1-4.9v-.1c.1-1.2-.3-2.4-1.2-3.2-.5-.6-1.4-1.2-2.9-1.3 0-.4-.3-.4-.6-.4zm-4 10.6z"
              />
              <path
                className="st58"
                d="m884.1 703.9-.1 5.9 9.1 5.4v-5.9zM889.6 713.2v5.9l9 5.3v-5.7zM871.8 745.9v5.8l9 5.4v-5.8z"
              />
              <path
                className="st5"
                d="M875.8 692.2v-12.9l12.7-3M890.9 701v-12.9l13.3-3.4M906.7 696.8v12.9M924.9 705v-12.8l-11.6-6.8M951.3 697.3v-12.8l-12.2-6.4M982.8 688.3v-12.8l-14.2-5.9M1010.4 680.4v-12.9l-13.7-5.7M1036.1 673.2v-12.9l6.1-12.4M1045.4 684v-12.9l12.6-2.7M1064.9 694.7v-12.9l7.6-7.1M1096 700.1v-12.9l-.9-8.9M1124.8 695.9V683l-8.5-7.2M1145.2 685.4v-12.8l-12.4-3.6M906.6 696l1.5-9.8M1145.9 652.9l10.2 1.1M885.7 673.7l-20.2-1.4M890.2 665.6l6.7 4M1047.9 620.7l6.6 4.1v7.5M1065.2 616.1l6.6 4v6.5"
              />
              <path className="st55" d="m1088 611.3 1.7 5.6v7" />
              <path
                className="st5"
                d="m1113.6 612.6-6.3 4.6v6.5M1136 620.8l-9.5 2.5v6.2M1152.8 635.6l-9.8.4v10"
              />
              <path
                className="st58"
                d="M1087.9 713.5v5.3s9.6 3.4 17.1-.1V714s-8.6 1.8-17.1-.5z"
              />
              <path
                className="st58"
                d="M1101.1 718.3v6.2s10.6 1.3 20.1-4v-6.7c0 .1-7.3 5.4-20.1 4.5zM1053.5 697.6v5.7s2.9 6 13.2 6.6l.3-5.4c.1 0-8.3-1.3-13.5-6.9z"
              />
              <path
                className="st6"
                d="M874.2 715v13.7l8.1 5.4V720zM886.9 736.6l-.5 14.6 8.6 5.1 1-15z"
              />
              <path className="st5" d="M878.1 713.4v5.1M891.9 736.7l-.4 4.3" />
              <path
                className="st56"
                d="M913.3 799.8v-83l40.2-12.1v81.7zM958.4 795.4v-87.1l41-11.2v85.7zM1004.2 771.2v-81.7l32.4-8.8s-.2 24.8.2 25.3c2.8 4.1 16.4 20.6 42.9 24.1 38.9 5.1 60.7-10.2 60.7-10.2l.1 62.6s-27.6 18.4-65.4 8.4c-28.2-7.5-39.1-29-39.1-29l-31.8 9.3z"
              />
              <path className="st59" d="M1116.1 766.8c6.1-1.3 12.5-3.5 19.2-6.7" />
              <g className="st60">
                <path
                  className="st15"
                  d="M1078.1 764.4c.4.1.5.2.7.3 1 .3 1 .3 2.4.6l.4.1-.6 2.3-.3-.1c-1.4-.3-1.5-.3-2.6-.7-.2-.1-.5-.2-.9-.3l.9-2.2z"
                />
              </g>
              <path className="st59" d="m1007.7 745.2 28.8-8.2s3.3 4.5 10.3 10.6" />
              <path className="st5" d="M1036.7 770.9v-96.6" />
              <g className="st60">
                <path
                  className="st56"
                  d="m1041.7 759.8 15.6-27.3 22.8 9.2-15.1 29z"
                />
                <path
                  className="st56"
                  d="m1080.1 741.7 2.4 9.3-11.7 26.5-5.8-6.8z"
                />
                <path
                  className="st56"
                  d="m1041.7 759.8 6.7 7.4 22.4 10.3-5.8-6.8z"
                />
                <path
                  d="M1047.1 756.6c.3-.8.8-1.2 1.3-1.7.3-.2.6-.4 1-.6.2-.1.3-.2.3-.5 0-1 .1-1.9.5-2.8 0-.1.1-.1.1-.2l.1-.1c.1.1.2.2.2.3.7 1.2 1.2 2.4 1.4 3.7 0 .2.1.3.3.2 1.4-.6 2.9-.5 4.3-.2 2.2.4 4 1.5 5.7 3 1.1 1.1 2 2.3 2.6 3.6.5 1.2 0 1.9-1.2 2.1-1.3.2-2.7 0-4-.2-1.2-.2-2.3-.7-3.3-1.3-2.3-1.3-3.8-3.3-4.6-5.9-.1-.3-.2-.3-.5-.2-1.2.7-2.7.9-4.2.8z"
                  id="utjwek_18_"
                />
                <path
                  d="M1051.2 749.3c.3-.8.8-1.2 1.3-1.7.3-.2.6-.4 1-.6.2-.1.3-.2.3-.5 0-1 .1-1.9.5-2.8 0-.1.1-.1.1-.2l.1-.1c.1.1.2.2.2.3.7 1.2 1.2 2.4 1.4 3.7 0 .2.1.3.3.2 1.4-.6 2.9-.5 4.3-.2 2.2.4 4 1.5 5.7 3 1.1 1.1 2 2.3 2.6 3.6.5 1.2 0 1.9-1.2 2.1-1.3.2-2.7 0-4-.2-1.2-.2-2.3-.7-3.3-1.3-2.3-1.3-3.8-3.3-4.6-5.9-.1-.3-.2-.3-.5-.2-1.2.7-2.6.9-4.2.8z"
                  id="utjwek_17_"
                />
                <path
                  d="M1055.5 742.2c.3-.8.8-1.2 1.3-1.7.3-.2.6-.4 1-.6.2-.1.3-.2.3-.5 0-1 .1-1.9.5-2.8 0-.1.1-.1.1-.2l.1-.1c.1.1.2.2.2.3.7 1.2 1.2 2.4 1.4 3.7 0 .2.1.3.3.2 1.4-.6 2.9-.5 4.3-.2 2.2.4 4 1.5 5.7 3 1.1 1.1 2 2.3 2.6 3.6.5 1.2 0 1.9-1.2 2.1-1.3.2-2.7 0-4-.2-1.2-.2-2.3-.7-3.3-1.3-2.3-1.3-3.8-3.3-4.6-5.9-.1-.3-.2-.3-.5-.2-1.3.7-2.7.9-4.2.8z"
                  id="utjwek_16_"
                />
              </g>
              <g className="st60">
                <path
                  className="st56"
                  d="m1079.9 778.6 7.3-30.6 24.5 2.4-6.4 32.2zM1111.7 750.4l4.9 8.3-3.8 28.7-7.5-4.8zM1079.9 778.6l8.5 5.2 24.4 3.6-7.5-4.8z"
                />
                <path
                  d="M1084.2 774c.1-.8.4-1.4.9-2 .2-.3.5-.6.8-.9.1-.1.2-.3.1-.5-.3-.9-.5-1.8-.3-2.8v-.3l.1-.1c.1.1.2.1.3.2 1 .9 1.9 1.9 2.4 3.2.1.2.2.3.4.1 1.2-1 2.6-1.3 4.1-1.4 2.2-.2 4.3.3 6.2 1.3 1.3.7 2.5 1.6 3.5 2.8.8 1 .6 1.8-.6 2.3s-2.6.8-3.9.9c-1.2 0-2.4 0-3.5-.3-2.6-.6-4.6-2.1-6-4.3-.2-.3-.3-.3-.5-.1-1.2 1-2.5 1.6-4 1.9z"
                  id="utjwek_15_"
                />
                <path
                  d="M1086.1 765.8c.1-.8.4-1.4.9-2 .2-.3.5-.6.8-.9.1-.1.2-.3.1-.5-.3-.9-.5-1.8-.3-2.8v-.3l.1-.1c.1.1.2.1.3.2 1 .9 1.9 1.9 2.4 3.2.1.2.2.3.4.1 1.2-1 2.6-1.3 4.1-1.4 2.2-.2 4.3.3 6.2 1.3 1.3.7 2.5 1.6 3.5 2.8.8 1 .6 1.8-.6 2.3s-2.6.8-3.9.9c-1.2 0-2.4 0-3.5-.3-2.6-.6-4.6-2.1-6-4.3-.2-.3-.3-.3-.5-.1-1.2 1-2.5 1.6-4 1.9z"
                  id="utjwek_14_"
                />
                <path
                  d="M1088.1 757.9c.1-.8.4-1.4.9-2 .2-.3.5-.6.8-.9.1-.1.2-.3.1-.5-.3-.9-.5-1.8-.3-2.8v-.3l.1-.1c.1.1.2.1.3.2 1 .9 1.9 1.9 2.4 3.2.1.2.2.3.4.1 1.2-1 2.6-1.3 4.1-1.4 2.2-.2 4.3.3 6.2 1.3 1.3.7 2.5 1.6 3.5 2.8.8 1 .6 1.8-.6 2.3s-2.6.8-3.9.9c-1.2 0-2.4 0-3.5-.3-2.6-.6-4.6-2.1-6-4.3-.2-.3-.3-.3-.5-.1-1.1 1-2.4 1.5-4 1.9z"
                  id="utjwek_13_"
                />
              </g>
              <path className="st61" d="m1057.5 639.6.5 4.3 3.5 1.4 2.6-3.5z" />
              <path className="st61" d="m1057.5 639.6 4.6-3.7 5.2 1.7-3.2 4.2z" />
              <path
                className="st32"
                d="M1103.7 622c11.7-7.6 8.7-20.9 8.7-20.9H1099l-3.5 5.9-3.4-5.9h-13.3s-2.9 13.3 8.7 20.9c-9.1 4.5-15.6 16.2-15.6 26.9 0 6.9 11.9 12.3 23.7 12.3 11.9 0 23.7-5.5 23.7-12.3 0-10.7-6.5-22.4-15.6-26.9z"
              />
              <path
                className="st5"
                d="M1084.6 635c-.7 1.4-1.4 3.2-.4 4.5.7 1 2.2 1.1 3.3.7 1.1-.4 2-1.3 2.8-2.2.5 1.5 1.5 3.3 3.2 3.3s2.6-1.9 3.2-3.5c.5 1.6 2.1 2.7 3.7 2.6 1.6-.1 3.1-1.4 3.4-3 .9.8 2.2 1.4 3.4 1.2 1.2-.3 2.1-1.8 1.4-2.8M1081 643.5c-2.1 1-2.6 4.1-1.1 5.9 1.5 1.7 4.7 1.4 5.9-.5-.7 2 1.2 4.3 3.3 4.5 2.1.2 4.1-1.3 4.9-3.3.4 1.6 2.1 2.8 3.7 2.6s3-1.8 3-3.4c1.2 1.3 2.8 2.4 4.6 2.6 1.8.1 3.7-1.1 3.9-2.9.7 1.2 2.7 1.1 3.6 0s.8-2.8.1-4.1M1089.2 627.8c-.7.7-.8 1.8-.4 2.6s1.4 1.3 2.4 1.1 1.7-1 2.3-1.8c.6 1 1.6 1.9 2.8 2s2.5-.9 2.4-2.1c.9.6 2 1 3 .7s1.8-1.5 1.4-2.4M1083.6 602.3c-.1 1.8.4 3.6 1.6 5M1088 601.8c.1 1.4.7 2.9 1.4 4.1M1107.3 602.3c.1 1.8-.4 3.6-1.6 5M1103 601.8c-.1 1.4-.7 2.9-1.4 4.1"
              />
              <path
                className="st61"
                d="m1122.7 662-.2 3.7-6.7 1.6-1.5-3.5zM1120.3 659.1l2.4 2.9-8.4 1.8v-3.2zM1072.1 663v3.8l6.7 1.8 1.7-3.5z"
              />
              <path className="st61" d="m1074.6 660.3-2.5 2.7 8.4 2.1v-3.2z" />
              <path className="st5" d="M979.9 705.1v83.2" />
              <path className="st6" d="m955.4 728.1.3 6.4-20.1 6.7v-6.7z" />
              <path className="st32" d="m974.8 721.8.1 6.3-19.2 6.4v-6.6z" />
              <path className="st6" d="m994 715.3.1 6.3-19.2 6.5v-6.7z" />
              <path className="st32" d="M1012.2 709.3v6.5l-18.1 5.9v-6.6z" />
              <path className="st6" d="M1029.2 703.3v6.6l-16.5 5.7v-7.1z" />
              <path
                className="st32"
                d="M1046.5 698.5v5.4l-17.3 5.9v-7zM912.4 709.4l23.2 25.1 19.8-6.4-21.5-24.9z"
              />
              <path
                className="st6"
                d="m933.9 703.2 21.5 24.9 19.2-6.2-21.1-24.4z"
              />
              <path
                className="st32"
                d="m953.5 697.5 21.1 24.4 19.3-6.3-20.6-23.9zM1009 681.4l-17.2 5 20.2 23.4 16.9-5.5z"
              />
              <path
                className="st6"
                d="m1046.6 698.6-21.8-21.8-15.8 4.6 19.9 22.9zM973.3 691.7l20.6 23.9 18.1-5.8-20.2-23.4z"
              />
              <path
                className="st5"
                d="m913.7 758.9 16.2-16.1M937.9 766.6l15.3-15.3M933.2 779l20.2-20.1M1014.7 738.4l21-21M913.9 766.7l10.5-10.6M1004.2 761.4l16.2-16.1M1004.3 769.2l10.6-10.6"
              />
              <circle className="st62" cx={998.9} cy={825.5} r={3.6} />
              <path
                className="st42"
                d="m1013.4 832.1-7.7-11.2h-27.5l8.4 11.5zM1016.6 817.1l-9.1-13.2H975l10 13.5z"
              />
              <path
                className="st42"
                d="m1015.2 836.6-1.8-4.5 3.2-15 5.8-2.6-9.4-12.4-5.5 1.8-1.8 17M985 817.4l1.6 15-1.8 3.7M975 803.9l3.2 17-2.6 2.9"
              />
              <circle className="st63" cx={984.3} cy={838.3} r={1.8} />
              <circle className="st63" cx={975.1} cy={825.2} r={1.8} />
              <circle className="st63" cx={1015.5} cy={838.3} r={1.8} />
              <path className="st5" d="m1024.4 817.2-13.6-18.2" />
              <circle className="st62" cx={991} cy={821} r={3.6} />
              <defs>
                <path
                  id="SVGID_00000156583691204392638980000013321709533148992935_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000103257130606804102850000014645591310743862927_">
                <use
                  xlinkHref="#SVGID_00000156583691204392638980000013321709533148992935_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000103257130606804102850000014645591310743862927_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1016.7 831.8 988.4 804"
              />
              <defs>
                <path
                  id="SVGID_00000023992678782851925720000002607261185723984289_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000078012271409755995000000000099421978421264276_">
                <use
                  xlinkHref="#SVGID_00000023992678782851925720000002607261185723984289_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000078012271409755995000000000099421978421264276_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1021.6 831.8 993.2 804"
              />
              <defs>
                <path
                  id="SVGID_00000054262098607598695230000004882433145473881745_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000102529131311196554380000014223684365384663474_">
                <use
                  xlinkHref="#SVGID_00000054262098607598695230000004882433145473881745_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000102529131311196554380000014223684365384663474_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1026.5 831.8 998.1 804"
              />
              <defs>
                <path
                  id="SVGID_00000043421467674989339570000008523499358737514395_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000034070568553806126440000012204817968728658342_">
                <use
                  xlinkHref="#SVGID_00000043421467674989339570000008523499358737514395_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000034070568553806126440000012204817968728658342_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1031.4 831.8 1003 804"
              />
              <defs>
                <path
                  id="SVGID_00000119104380818318222060000002905410876314007937_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000052809257143250821600000006641484734376083608_">
                <use
                  xlinkHref="#SVGID_00000119104380818318222060000002905410876314007937_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000052809257143250821600000006641484734376083608_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M997.2 831.8 968.9 804"
              />
              <defs>
                <path
                  id="SVGID_00000155105775564080227030000009801890337761094824_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000101084108465000397880000001980648691694965946_">
                <use
                  xlinkHref="#SVGID_00000155105775564080227030000009801890337761094824_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000101084108465000397880000001980648691694965946_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M992.3 831.8 964 804"
              />
              <defs>
                <path
                  id="SVGID_00000019653833134253428850000016364525672183550343_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000180352768834699083890000009941905129413980340_">
                <use
                  xlinkHref="#SVGID_00000019653833134253428850000016364525672183550343_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000180352768834699083890000009941905129413980340_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1002.1 831.8 973.7 804"
              />
              <defs>
                <path
                  id="SVGID_00000027605054700619209760000013980116878709708447_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000070099116027549864620000005487693796693115812_">
                <use
                  xlinkHref="#SVGID_00000027605054700619209760000013980116878709708447_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000070099116027549864620000005487693796693115812_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1007 831.8 978.6 804"
              />
              <defs>
                <path
                  id="SVGID_00000066483796652017939280000015931094583587235728_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000037668325572848592260000009103121641518611878_">
                <use
                  xlinkHref="#SVGID_00000066483796652017939280000015931094583587235728_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000037668325572848592260000009103121641518611878_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1011.9 831.8 983.5 804"
              />
              <defs>
                <path
                  id="SVGID_00000070086783364553159800000009665342380377534640_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000094587902629921559670000009895336870645125531_">
                <use
                  xlinkHref="#SVGID_00000070086783364553159800000009665342380377534640_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000094587902629921559670000009895336870645125531_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m967.2 831.8 28.4-27.8"
              />
              <defs>
                <path
                  id="SVGID_00000018229931437684684270000006787056356836425125_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000136393322682565300350000010693031697246015622_">
                <use
                  xlinkHref="#SVGID_00000018229931437684684270000006787056356836425125_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000136393322682565300350000010693031697246015622_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m962.3 831.8 28.4-27.8"
              />
              <defs>
                <path
                  id="SVGID_00000139987721650266226020000010538901181526380476_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000039848794431529850910000001559295812668571799_">
                <use
                  xlinkHref="#SVGID_00000139987721650266226020000010538901181526380476_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000039848794431529850910000001559295812668571799_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m957.4 831.8 28.4-27.8"
              />
              <defs>
                <path
                  id="SVGID_00000138563209883352369340000000403600016433475991_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000134244609283421952220000009380140906285216674_">
                <use
                  xlinkHref="#SVGID_00000138563209883352369340000000403600016433475991_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000134244609283421952220000009380140906285216674_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M952.6 831.8 981 804"
              />
              <defs>
                <path
                  id="SVGID_00000013165433370758489270000005667553821977208970_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000142881616034572409560000000801167144184252299_">
                <use
                  xlinkHref="#SVGID_00000013165433370758489270000005667553821977208970_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000142881616034572409560000000801167144184252299_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m986.7 831.8 28.4-27.8"
              />
              <defs>
                <path
                  id="SVGID_00000030471313259378916310000007386793722596621476_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000029767019918307252350000009876026751731570877_">
                <use
                  xlinkHref="#SVGID_00000030471313259378916310000007386793722596621476_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000029767019918307252350000009876026751731570877_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m991.6 831.8 28.3-27.8"
              />
              <defs>
                <path
                  id="SVGID_00000147192744308365664660000002075588381660712127_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000003817588926265357040000004768309895680499096_">
                <use
                  xlinkHref="#SVGID_00000147192744308365664660000002075588381660712127_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000003817588926265357040000004768309895680499096_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m996.3 831.8 28.4-27.8"
              />
              <defs>
                <path
                  id="SVGID_00000009579951094819437950000003932962833921568155_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000091696917516960430850000004358749322481907116_">
                <use
                  xlinkHref="#SVGID_00000009579951094819437950000003932962833921568155_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000091696917516960430850000004358749322481907116_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1001.6 831.8 1030 804"
              />
              <defs>
                <path
                  id="SVGID_00000051341155847446726540000013308443850191528580_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000170969466265903789640000000942047984999316625_">
                <use
                  xlinkHref="#SVGID_00000051341155847446726540000013308443850191528580_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000170969466265903789640000000942047984999316625_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1007.7 831.8 28.4-27.8"
              />
              <defs>
                <path
                  id="SVGID_00000132795791143251799630000008860164008332329868_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000026156525808085857920000006797123733640820641_">
                <use
                  xlinkHref="#SVGID_00000132795791143251799630000008860164008332329868_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000026156525808085857920000006797123733640820641_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m981.8 831.8 28.4-27.8"
              />
              <defs>
                <path
                  id="SVGID_00000173856477727286415370000009651607101433357478_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000055665024618658231220000004452746847547941007_">
                <use
                  xlinkHref="#SVGID_00000173856477727286415370000009651607101433357478_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000055665024618658231220000004452746847547941007_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m977 831.8 28.3-27.8"
              />
              <defs>
                <path
                  id="SVGID_00000140015191621597524680000013289531771115293374_"
                  d="m1016.6 817-3.3 14.6-26.2.5-8.9-11.2-3-16.7 31.9-.3z"
                />
              </defs>
              <clipPath id="SVGID_00000173843719020410260470000003382442132404397466_">
                <use
                  xlinkHref="#SVGID_00000140015191621597524680000013289531771115293374_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000173843719020410260470000003382442132404397466_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m972.1 831.8 28.3-27.8"
              />
              <path
                className="st42"
                d="m1054.8 849.1 8.9-10.2 27.3 3.2-9.7 10.3zM1053.3 833.8l10.6-12 32.2 3.7-11.5 12.2z"
              />
              <path
                className="st42"
                d="m1052.4 853.4 2.4-4.3-1.5-15.3-5.5-3.2 10.8-11.2 5.3 2.4-.2 17.1M1084.6 837.7l-3.3 14.7 1.4 3.9M1096.1 825.5l-5.1 16.6 2.2 3"
              />
              <circle className="st63" cx={1082.9} cy={858.6} r={1.8} />
              <circle className="st63" cx={1093.6} cy={846.7} r={1.8} />
              <circle className="st63" cx={1052} cy={855} r={1.8} />
              <path className="st5" d="m1045.6 833 15.6-16.5" />
              <defs>
                <path
                  id="SVGID_00000101792354905342894420000014722230142991523994_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000022542979278744807770000003122223515173413516_">
                <use
                  xlinkHref="#SVGID_00000101792354905342894420000014722230142991523994_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000022542979278744807770000003122223515173413516_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1051.5 848.4 31.4-24.3"
              />
              <defs>
                <path
                  id="SVGID_00000037687309788139455700000001053374460216516788_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000088127896339576239330000014824996362285770392_">
                <use
                  xlinkHref="#SVGID_00000037687309788139455700000001053374460216516788_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000088127896339576239330000014824996362285770392_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1046.6 847.9 31.4-24.4"
              />
              <defs>
                <path
                  id="SVGID_00000101094125871669689160000016164557807196386993_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000132800102899138566870000005657034767920948921_">
                <use
                  xlinkHref="#SVGID_00000101094125871669689160000016164557807196386993_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000132800102899138566870000005657034767920948921_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1041.8 847.3 31.4-24.3"
              />
              <defs>
                <path
                  id="SVGID_00000079460013232069840770000010019614437406605752_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000166667937529997466480000011106343350594342276_">
                <use
                  xlinkHref="#SVGID_00000079460013232069840770000010019614437406605752_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000166667937529997466480000011106343350594342276_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1037 846.7 31.3-24.3"
              />
              <defs>
                <path
                  id="SVGID_00000080927918541770225030000016482299674672425600_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000136409075897466282360000003189758008896279682_">
                <use
                  xlinkHref="#SVGID_00000080927918541770225030000016482299674672425600_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000136409075897466282360000003189758008896279682_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1070.9 850.7 31.3-24.4"
              />
              <defs>
                <path
                  id="SVGID_00000036211316337448349690000002587383117188899491_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000130607000932878729240000008948262470363402909_">
                <use
                  xlinkHref="#SVGID_00000036211316337448349690000002587383117188899491_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000130607000932878729240000008948262470363402909_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1075.7 851.2 31.4-24.3"
              />
              <defs>
                <path
                  id="SVGID_00000183960131921486034060000006383258032263410849_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000026869883725858757150000018389249488414753415_">
                <use
                  xlinkHref="#SVGID_00000183960131921486034060000006383258032263410849_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000026869883725858757150000018389249488414753415_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1066 850.1 31.4-24.4"
              />
              <defs>
                <path
                  id="SVGID_00000015313268393872892460000017172121558848798868_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000088112453143874450730000003319493131568563080_">
                <use
                  xlinkHref="#SVGID_00000015313268393872892460000017172121558848798868_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000088112453143874450730000003319493131568563080_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1061.2 849.5 31.3-24.3"
              />
              <defs>
                <path
                  id="SVGID_00000017477879009256742370000006014454050309914802_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000118373934818049796460000004212277385748159618_">
                <use
                  xlinkHref="#SVGID_00000017477879009256742370000006014454050309914802_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000118373934818049796460000004212277385748159618_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1056.3 849 31.4-24.4"
              />
              <defs>
                <path
                  id="SVGID_00000056406792624546948230000003678662014529581231_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000020382544778929029730000000030722197804381841_">
                <use
                  xlinkHref="#SVGID_00000056406792624546948230000003678662014529581231_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000020382544778929029730000000030722197804381841_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1100.7 854.1-25-30.8"
              />
              <defs>
                <path
                  id="SVGID_00000133530202603294366440000002493175294417297034_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000003088831194444564950000001367271840460175269_">
                <use
                  xlinkHref="#SVGID_00000133530202603294366440000002493175294417297034_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000003088831194444564950000001367271840460175269_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1105.5 854.6-25-30.8"
              />
              <defs>
                <path
                  id="SVGID_00000011001657999479981260000013526606782963768231_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000134929101381153669980000011021330835757030327_">
                <use
                  xlinkHref="#SVGID_00000011001657999479981260000013526606782963768231_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000134929101381153669980000011021330835757030327_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1110.4 855.2-25-30.8"
              />
              <defs>
                <path
                  id="SVGID_00000174597219971511416740000005192808095229682312_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000153704816941065930080000004627396178079521964_">
                <use
                  xlinkHref="#SVGID_00000174597219971511416740000005192808095229682312_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000153704816941065930080000004627396178079521964_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1115.2 855.7-25-30.8"
              />
              <defs>
                <path
                  id="SVGID_00000060718152633459175590000005013509241465140864_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000010285358245765350740000015733019553378049156_">
                <use
                  xlinkHref="#SVGID_00000060718152633459175590000005013509241465140864_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000010285358245765350740000015733019553378049156_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1081.3 851.9-25-30.9"
              />
              <defs>
                <path
                  id="SVGID_00000149363573461361719100000011622813290622280077_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000143583166735754582010000007151181225027702198_">
                <use
                  xlinkHref="#SVGID_00000149363573461361719100000011622813290622280077_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000143583166735754582010000007151181225027702198_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1076.5 851.3-25-30.8"
              />
              <defs>
                <path
                  id="SVGID_00000080909434809595905210000006181307589262196909_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000039114537389237050840000010281192625242234801_">
                <use
                  xlinkHref="#SVGID_00000080909434809595905210000006181307589262196909_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000039114537389237050840000010281192625242234801_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1071.7 850.8-25-30.9"
              />
              <defs>
                <path
                  id="SVGID_00000075156427224867966650000000511895174915466413_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000121968377194335686230000007978935194145614727_">
                <use
                  xlinkHref="#SVGID_00000075156427224867966650000000511895174915466413_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000121968377194335686230000007978935194145614727_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1066.5 850.1-25-30.8"
              />
              <defs>
                <path
                  id="SVGID_00000068637682866099124460000014863670949135264444_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000109006503316437725060000017392889324813995964_">
                <use
                  xlinkHref="#SVGID_00000068637682866099124460000014863670949135264444_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000109006503316437725060000017392889324813995964_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1060.4 849.5-25-30.9"
              />
              <defs>
                <path
                  id="SVGID_00000151502113636699847870000012233272757237388702_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000173142959244980202570000007188774756875191987_">
                <use
                  xlinkHref="#SVGID_00000151502113636699847870000012233272757237388702_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000173142959244980202570000007188774756875191987_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1086.1 852.4-25-30.8"
              />
              <defs>
                <path
                  id="SVGID_00000166640965065462185310000013514478958998991294_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000014618395729907455650000011941582455245407620_">
                <use
                  xlinkHref="#SVGID_00000166640965065462185310000013514478958998991294_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000014618395729907455650000011941582455245407620_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1091 853-25-30.9"
              />
              <defs>
                <path
                  id="SVGID_00000018957283485216328570000006905217754815588527_"
                  d="m1053.3 833.8 1.6 14.8 25.9 3.5L1091 842l5-16.3-31.7-3.8z"
                />
              </defs>
              <clipPath id="SVGID_00000169517289740012032130000016968875590511521976_">
                <use
                  xlinkHref="#SVGID_00000018957283485216328570000006905217754815588527_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000169517289740012032130000016968875590511521976_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1095.8 853.5-25-30.8"
              />
              <path
                className="st106"
                d="M921 844.4c0 2.9-5.3 9.6-15.7 9.6-10.8 0-15.7-6.6-15.7-9.6 0-14.2 7-15.5 15.7-15.5S921 830 921 844.4z"
              />
              <path
                className="st107"
                d="M905.3 838.2c-6 0-12.5-1.6-12.5-5.2s6.5-5.2 12.5-5.2 12.5 1.6 12.5 5.2-6.5 5.2-12.5 5.2z"
              />
              <path
                className="st15"
                d="M905.3 829.3c6.1 0 11 1.7 11 3.7s-4.9 3.7-11 3.7-11-1.7-11-3.7 4.9-3.7 11-3.7m0-2.9c-6.4 0-13.9 1.7-13.9 6.6 0 1.6.9 3.9 5.2 5.4 2.4.8 5.5 1.2 8.7 1.2 6.4 0 13.9-1.7 13.9-6.6 0-1.6-.9-3.9-5.2-5.4-2.3-.8-5.4-1.2-8.7-1.2z"
              />
              <path
                className="st5"
                d="M907.4 843.5c.3-.1.5-.1.8-.1.8 1.3.8 2.8 3.4 2.3 1.2-.4 3.4-.9 3.5-2.1-.1-.6-1.4-1.8.3-2.1"
              />
              <defs>
                <ellipse
                  id="SVGID_00000160908431410532392540000015396107177678232450_"
                  cx={905.3}
                  cy={833}
                  rx={11}
                  ry={3.7}
                />
              </defs>
              <clipPath id="SVGID_00000009570748320772479650000000783708461453109146_">
                <use
                  xlinkHref="#SVGID_00000160908431410532392540000015396107177678232450_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <g
                style={{
                  clipPath:
                    "url(#SVGID_00000009570748320772479650000000783708461453109146_)",
                }}
              >
                <circle className="st109" cx={896.4} cy={834.6} r={3.6} />
                <circle className="st109" cx={908.1} cy={836} r={3.6} />
                <circle className="st109" cx={901.7} cy={836.2} r={3.6} />
                <circle className="st109" cx={909.9} cy={830.8} r={3.6} />
                <circle className="st109" cx={904.7} cy={830.2} r={3.6} />
                <circle className="st109" cx={913.9} cy={834.8} r={3.6} />
              </g>
              <circle className="st109" cx={897.2} cy={829.3} r={3.6} />
              <circle className="st109" cx={901.2} cy={825.7} r={3.6} />
              <circle className="st109" cx={908.9} cy={830.7} r={3.6} />
              <circle className="st109" cx={903.3} cy={831.1} r={3.6} />
              <circle className="st109" cx={910.6} cy={825.6} r={3.6} />
              <circle className="st109" cx={905.4} cy={824.9} r={3.6} />
              <circle className="st109" cx={914.5} cy={829.6} r={3.6} />
              <path
                className="st106"
                d="M966.9 800.2c0 2.9-5.3 9.6-15.7 9.6-10.8 0-15.7-6.6-15.7-9.6 0-14.2 7-15.5 15.7-15.5s15.7 1.1 15.7 15.5z"
              />
              <path
                className="st107"
                d="M951.2 794c-6 0-12.5-1.6-12.5-5.2s6.5-5.2 12.5-5.2 12.5 1.6 12.5 5.2-6.5 5.2-12.5 5.2z"
              />
              <path
                className="st15"
                d="M951.2 785.1c6.1 0 11 1.7 11 3.7 0 2.1-4.9 3.7-11 3.7s-11-1.7-11-3.7 4.9-3.7 11-3.7m0-2.9c-6.4 0-13.9 1.7-13.9 6.6 0 1.6.9 3.9 5.2 5.4 2.4.8 5.5 1.2 8.7 1.2 6.4 0 13.9-1.7 13.9-6.6 0-1.6-.9-3.9-5.2-5.4-2.3-.8-5.4-1.2-8.7-1.2z"
              />
              <path
                className="st5"
                d="M953.3 799.3c.3-.1.5-.1.8-.1.8 1.3.8 2.8 3.4 2.3 1.2-.4 3.4-.9 3.5-2.1-.1-.6-1.4-1.8.3-2.1"
              />
              <defs>
                <ellipse
                  id="SVGID_00000045616751702692037840000012101680970726044314_"
                  cx={951.2}
                  cy={788.8}
                  rx={11}
                  ry={3.7}
                />
              </defs>
              <clipPath id="SVGID_00000008844117291433479580000003745175566139395244_">
                <use
                  xlinkHref="#SVGID_00000045616751702692037840000012101680970726044314_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <g
                style={{
                  clipPath:
                    "url(#SVGID_00000008844117291433479580000003745175566139395244_)",
                }}
              >
                <circle className="st111" cx={942.4} cy={790.4} r={3.6} />
                <circle className="st111" cx={954.1} cy={791.8} r={3.6} />
                <circle className="st62" cx={947.6} cy={792} r={3.6} />
                <circle className="st109" cx={955.8} cy={786.6} r={3.6} />
                <circle className="st109" cx={950.6} cy={786} r={3.6} />
                <circle className="st62" cx={959.7} cy={790.7} r={3.6} />
              </g>
              <circle className="st62" cx={943} cy={785.2} r={3.6} />
              <circle className="st111" cx={947.1} cy={781.5} r={3.6} />
              <circle className="st62" cx={954.8} cy={786.6} r={3.6} />
              <circle className="st111" cx={949.2} cy={786.9} r={3.6} />
              <circle className="st111" cx={956.5} cy={781.4} r={3.6} />
              <circle className="st62" cx={951.3} cy={780.7} r={3.6} />
              <circle className="st111" cx={960.5} cy={785.4} r={3.6} />
              <path
                className="st106"
                d="M943.2 810.3c0 2.9-5.3 9.6-15.7 9.6-10.8 0-15.7-6.6-15.7-9.6 0-14.2 7-15.5 15.7-15.5s15.7 1 15.7 15.5z"
              />
              <path
                className="st107"
                d="M927.5 804.1c-6 0-12.5-1.6-12.5-5.2s6.5-5.2 12.5-5.2 12.5 1.6 12.5 5.2-6.4 5.2-12.5 5.2z"
              />
              <path
                className="st15"
                d="M927.5 795.1c6.1 0 11 1.7 11 3.7s-4.9 3.7-11 3.7-11-1.7-11-3.7 4.9-3.7 11-3.7m0-2.9c-6.4 0-13.9 1.7-13.9 6.6 0 1.6.9 3.9 5.2 5.4 2.4.8 5.5 1.2 8.7 1.2 6.4 0 13.9-1.7 13.9-6.6 0-1.6-.9-3.9-5.2-5.4-2.3-.7-5.4-1.2-8.7-1.2z"
              />
              <path
                className="st5"
                d="M929.6 809.3c.3-.1.5-.1.8-.1.8 1.3.8 2.8 3.4 2.3 1.2-.4 3.4-.9 3.5-2.1-.1-.6-1.4-1.8.3-2.1"
              />
              <defs>
                <ellipse
                  id="SVGID_00000103242704503318393950000001879037027354284453_"
                  cx={927.5}
                  cy={798.9}
                  rx={11}
                  ry={3.7}
                />
              </defs>
              <clipPath id="SVGID_00000080896264394567523070000002698275753527212958_">
                <use
                  xlinkHref="#SVGID_00000103242704503318393950000001879037027354284453_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <g
                style={{
                  clipPath:
                    "url(#SVGID_00000080896264394567523070000002698275753527212958_)",
                }}
              >
                <circle className="st113" cx={918.7} cy={800.5} r={3.6} />
                <circle className="st113" cx={930.4} cy={801.8} r={3.6} />
                <circle className="st114" cx={923.9} cy={802} r={3.6} />
                <circle className="st109" cx={932.1} cy={796.7} r={3.6} />
                <circle className="st109" cx={926.9} cy={796} r={3.6} />
                <circle className="st114" cx={936.1} cy={800.7} r={3.6} />
              </g>
              <circle className="st114" cx={919.4} cy={795.2} r={3.6} />
              <circle className="st113" cx={923.5} cy={791.5} r={3.6} />
              <circle className="st114" cx={931.1} cy={796.6} r={3.6} />
              <circle className="st113" cx={925.5} cy={796.9} r={3.6} />
              <circle className="st113" cx={932.9} cy={791.4} r={3.6} />
              <circle className="st114" cx={927.6} cy={790.8} r={3.6} />
              <circle className="st114" cx={936.8} cy={795.5} r={3.6} />
              <path
                className="st22"
                d="M846.9 772.3c-.7-2.5 2-5.5 4.5-4.6-.7-1.2-1.4-2.6-1-4s2.5-2.2 3.2-1c-.5-3.2 1.2-6.8 4.2-7.8 3-1.1 6.9 1.3 6.7 4.6.6-1.4 2.2-2.3 3.7-2.1 1.5.3 2.7 1.7 2.8 3.2.2-1.2 2.1-1.2 2.8-.3s.7 2.3.6 3.5c1.2-1.5 4-1 4.9.7 1 1.7.3 4-1.2 5.4 1.2-1.2 3.3-1.1 4.5 0 1.2 1.2 1.2 3.3.1 4.5.7-1.1 1.8-2.1 3.1-2.2 1.3-.1 2.7 1 2.4 2.3 1-1 2.9.1 3.1 1.5.1 1.4-.7 2.7-1.6 3.9 2.3-1.2 5.4-.1 6.6 2.1s.3 5.4-1.9 6.7c2.2-.4 4.8 1 5.2 3.2s-1.9 4.6-4.1 3.8c1.3-.1 2.6.8 3.3 2s.8 2.6.8 3.9c0 .4 0 .8-.2 1.2-.4.9-1.4 1.2-2.3 1.1-.9-.1-1.7-.6-2.5-1.1 1 2.1.2 4.9-1.8 6-2.1 1-5-.7-5-3-.7 2.6-3.8 4.2-6.4 3.3-2.5-.9-3.9-4.1-3-6.6-2.8.1-5.2 2.9-7.9 2.3-2.4-.6-3.3-3.5-3.6-5.9-.1-1 .1-2.4 1.1-2.2-1.6 1.4-4.6.7-5.2-1.3-1.8-.1-2.8-2.6-1.6-4-1.4.6-2.9 1.2-4.5 1.3-1.5.1-3.3-.5-4.1-1.8s-.5-3.4 1-4c-1.8 0-3.6-.3-5.1-1.5-1.4-1.1-2.2-3.1-1.7-4.8s2.4-3 4.2-2.4c-1.2-.8-1.4-2.7-.3-3.7-.6 2-3.5-1-3.8-2.2zM1096.9 774.4c-1.9 1.8-.9 5.8 1.7 6.1-2.7.4-5.3 2.1-6.2 4.6-.9 2.5.5 5.9 3.2 6.4-1.4.9-3 2-3.6 3.6s.3 3.8 2 3.9c-3.3.3-5.9 3.7-5.4 7 .5 3.2 3.9 5.7 7.1 5.2-.6 2.5 1.3 5.4 3.9 5.8s5.2-1.8 5.4-4.4c.5 1.3 2.5 1.5 3.7.7 1.2-.9 1.7-2.3 2.2-3.7 2.2 1.6 5.3 1.2 7.9.6 2.4-.5 4.8-1.2 6.7-2.7 1.9-1.5 3.1-4.1 2.4-6.4 1.6.1 3.2.2 4.7-.2s3-1.4 3.5-2.9c.9 1.7 4 1.6 4.7-.3 1.5 1.7 3.9 2.4 6.1 2 2.2-.5 4.1-2.2 4.8-4.4 1.2 1.6 3.7 1.6 5.3.4 1.5-1.2 2.1-3.4 2-5.3.6 2.3 3.2 3.8 5.5 3.3s4-2.9 3.6-5.3c2.3-.1 4.5-1.2 5.6-3.2 1-2 .2-4.9-1.9-5.6 3.6-3 3.6-9.5 0-12.5 1.6-.6 3.1-1.7 4.1-3.2 1.1-1.4 2.7-5.6-.1-8.4-2.4-2.4-6.3-.8-6.9.3.8-1.5 1-3.6-.1-5s-3.6-1.5-4.5 0v-1.7c-2.2-1-5.1 0-6.2 2.3 1.7-2.6.4-6.7-2.5-7.9s-6.7.8-7.3 3.9c.7-.9.4-2.3-.4-3-.8-.8-2-1-3.2-.8-2 .2-3.9 1.4-4.9 3.1-1 1.7-1.1 4-.1 5.8-2.5-2-6.6-1.3-8.4 1.4-1.7 2.7-.6 6.7 2.3 8.2-2.4-.8-5.3.4-6.3 2.7-1.1 2.3-.1 5.3 2 6.6-1.7-1.2-3.7-2-5.8-1.7-2 .3-3.9 1.8-4.3 3.8.9-1.9 1.1-4.2.1-6-.9-1.9-3-3.2-5-3-2.1.2-3.9 2-3.9 4.1-.1-1.9-3-2.6-4.4-1.3-1.5 1.2-1.7 3.4-1.6 5.3 0-.5-1.7 1.4-1.8 1.7-1.7-1.1-4.1-1.4-5.7.1z"
              />
              <circle className="st4" cx={1153.1} cy={764} r={4} />
              <circle className="st4" cx={1153.7} cy={782.9} r={4} />
              <circle className="st4" cx={1133.6} cy={782} r={4} />
              <circle className="st4" cx={1111} cy={800.1} r={4} />
              <circle className="st4" cx={1113} cy={783} r={4} />
              <circle className="st4" cx={863.7} cy={770.9} r={4} />
              <circle className="st4" cx={868.5} cy={786.3} r={4} />
              <circle className="st4" cx={884.7} cy={790} r={4} />
            </g>
            <g id="bus_x5F_off" onMouseEnter={()=>setActiveBus(true)} style={{display: isActiveBus? "none" : "block"}}>
              <path
                className="st115"
                d="M1032.7 465.3c-.4 2.8-.5 5.8-2 6.8-.7.4-2.7 0-3.5-.1-2.4-.4-3.9-3.9-3.3-8 .6-4 3.1-7 5.5-6.6 1.2.2 4 0 4.6 1.6.5 1.3-1 4.4-1.3 6.3z"
              />
              <ellipse
                transform="rotate(-81.211 1032.013 464.93)"
                className="st116"
                cx={1032.1}
                cy={464.9}
                rx={7.4}
                ry={4.4}
              />
              <path
                className="st115"
                d="M1053.3 471.5c-.1 2.8.1 5.8-1.3 7-.7.5-2.7.2-3.5.2-2.4-.1-4.2-3.6-4-7.6.2-4.1 2.4-7.3 4.8-7.2 1.3 0 4-.4 4.8 1.2.6 1.2-.6 4.4-.8 6.4z"
              />
              <ellipse
                transform="rotate(-86.801 1052.597 471.465) scale(.99996)"
                className="st117"
                cx={1052.6}
                cy={471.5}
                rx={7.4}
                ry={4.4}
              />
              <path
                className="st115"
                d="M1093.3 448.7c-.4 2.7-.4 5.5-2 6.5-.7.4-2.6 0-3.3-.1-2.3-.3-3.7-3.8-3.1-7.6.6-3.8 3-6.7 5.3-6.3 1.2.2 3.8 0 4.4 1.5.5 1.2-1 4.1-1.3 6z"
              />
              <ellipse
                transform="rotate(-81.211 1092.724 448.372)"
                className="st116"
                cx={1092.8}
                cy={448.4}
                rx={7.1}
                ry={4.2}
              />
              <path
                className="st118"
                d="m1094.3 433.1 1.2-12.3-6.4-1.1-2.6-7.7-4.8 6.4-6.7-1.2-2.7-7.4-4.6 6.1-5.1-.9-31.8 12.8c-7.2 2.4-6.9 9.7-6.9 9.7l-2.3 25.2c-.1 1.2.7 2.4 1.9 2.9l31.8 10.7c1.6.5 3.3.3 4.7-.7l35.3-24.9c2.1-1.5 3.5-3.8 3.7-6.4l1.4-15.1-4.8-.6"
              />
              <path
                className="st3"
                d="m1090.8 424.2-29.5 18.6c-1.7 1.1-3.7 1.4-5.7.9l-26-7.6M1056.4 472l2.5-27.8"
              />
              <path className="st43" d="m1028.5 441.3-.7 6.9 25.3 7.3.6-7.2z" />
              <path className="st119" d="m1033.1 460.1-.3 3.8 10.7 3.6.4-4.3z" />
              <path className="st43" d="m1090.7 430.6-.3 7.2-27.6 18.2.6-7.6z" />
              <path
                d="M1024.7 459.6c.1-1.8 1.2-3.2 2.5-3.1s2.3 1.5 2.3 3.3c-.1 1.8-1.2 3.2-2.5 3.1s-2.3-1.6-2.3-3.3z"
                style={{
                  fill: "#fff",
                  stroke: "#222",
                  strokeWidth: 1.9202,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10.0006,
                }}
              />
              <ellipse
                transform="rotate(-87.808 1050.275 466.79) scale(1.00003)"
                className="st121"
                cx={1050.3}
                cy={466.8}
                rx={3.2}
                ry={2.4}
              />
              <path
                className="st48"
                d="m1060 425.1 1.9-35.3s-2-1.5-9.6 6.5-4.9 15.2-4.9 15.2l1.9 10.4s.7-6 3.2-9.7c3.8-5.6 8.6-3.2 8.6-3.2"
              />
            </g>
            <g id="square_x5F_off" onMouseEnter={()=>setActiveSquare(true)} style={{display: isActiveSquare? "none" : "block"}}>
              <g id="square_1_">
                <path
                  className="st122"
                  d="M1018.3 564.7c0 8.3-18.3 16.4-40.9 16.4-22.6 0-40.9-8.1-40.9-16.4 0-8.3 18.3-14.9 40.9-14.9 22.5-.1 40.9 6.6 40.9 14.9z"
                />
                <path
                  className="st122"
                  d="M1003.7 564.5c0 4.6-11.8 8.4-26.4 8.4-14.6 0-26.4-3.7-26.4-8.4 0-2.1 2.7-15.5 4-16.2 6-3.5 14.3-3.6 22.4-3.6 6.1 0 17.5 1.1 22.5 3.6.6.2 3.9 13.5 3.9 16.2z"
                />
                <ellipse
                  className="st122"
                  cx={977.3}
                  cy={548.9}
                  rx={22.8}
                  ry={7.2}
                />
                <ellipse
                  className="st122"
                  cx={977.3}
                  cy={548.9}
                  rx={13.7}
                  ry={3.7}
                />
                <path
                  className="st122"
                  d="M977.3 549.8h0c-2 0-3.6-1.6-3.6-3.6V536c0-2 1.6-3.6 3.6-3.6h0c2 0 3.6 1.6 3.6 3.6v10.2c.1 2-1.6 3.6-3.6 3.6z"
                />
                <path
                  className="st122"
                  d="M987.4 533.3c0 1.8-4.5 3.2-10.1 3.2s-10.1-1.4-10.1-3.2c0-.8 1-5.9 1.5-6.2 2.3-1.3 5.5-1.4 8.6-1.4 2.4 0 6.7.4 8.6 1.4.3.1 1.5 5.2 1.5 6.2z"
                />
                <ellipse
                  className="st122"
                  cx={977.3}
                  cy={527.4}
                  rx={8.7}
                  ry={2.8}
                />
                <path
                  className="st122"
                  d="M977.3 527h0c-1.2 0-2.2-1-2.2-2.2V514c0-1.2 1-2.2 2.2-2.2h0c1.2 0 2.2 1 2.2 2.2v10.9c0 1.2-1 2.1-2.2 2.1z"
                />
                <path
                  className="st122"
                  d="M994.9 514.9c0 3.1-7.9 5.6-17.6 5.6s-17.6-2.5-17.6-5.6c0-.6-.3-4.1.1-4.6 2.2-2.3 9.5-1 17.5-1 6.4 0 13.5-1.8 16.7-.2 1.6.9.9 4.7.9 5.8z"
                />
                <ellipse
                  className="st122"
                  cx={977.3}
                  cy={510.9}
                  rx={17.6}
                  ry={5.6}
                />
                <path
                  className="st63"
                  d="M989.9 508c0-.3-.2-1.4-.2-1.7-1-10.5-20.7-12-24.2.8-.4 1.5-.5 2.7-.4 3.3.3 1.2 3.2 3.6 13.9 3 11.8-.6 10.9-3.6 10.9-5.4z"
                />
                <path
                  className="st63"
                  d="M976 475.1s2.5-5.1 6.8-6.3c0 0 3.1 1.2 3 9.6 0 0 6 4.2 4.6 12.5s-8 9.7-11.8 10.8c-4.3 1.1-14.2 3.6-18.3-2.1-1.3-1.9-3.1-4.9-2.4-9.8 0 0-5-4.3-3.2-12.9 0 0 3.2-2.2 10.5 3.2 0 0 .1-2-1.8-4.8 0 0 3 .4 5.4 4 0 0-.2-3.2.8-5.3 0 0 1.2 2.7 3.8 4.7 0 0-1.4-5.1 1.4-7.2 0 0 .6 4.7 2.2 5.5"
                />
                <path
                  className="st42"
                  d="M957.2 480.4c-.7 2.7.9 4.6 2.1 5.2M959.6 481c.6.5 1.1 1 1.5 1.6M959.3 486.9c0-.5.2-1.1.5-1.5.7-1.3 1.7-2.4 2.8-3.4M980.7 474.7c-.4.5-.7 1.2-.7 1.9M982.1 471.8c1.7 2.4 1.2 4.6 1 5.4M979.1 476.6c1.6.8 3.3 1.3 5 1.3M969.9 487.3l.9 3.5M978.2 484.9l.9 3.5"
                />
                <ellipse
                  transform="rotate(-15.094 975.8 491.502)"
                  className="st15"
                  cx={975.8}
                  cy={491.5}
                  rx={2}
                  ry={1.4}
                />
                <path
                  className="st42"
                  d="M972.2 493.7c.5 2 4.9 1.8 4.1-1.2.8 2.9 3.8 1.3 4-1M954.4 492.1c1.2 2.2 4.8 2.6 5.9 1.5M954.4 496.7c1.7.8 4.5 1.3 5.8-.1M957.1 501.1c1.9 0 3.8-1.2 4.8-2.8M987.5 484.7c2 0 3.9-1.2 4.8-3.1M988.4 487.2c1.7.4 3.5.2 5-.5M988.7 490c1.4.8 3.2.8 4.8.2"
                />
                <path
                  className="st123"
                  d="M948.7 569.9c-3.1-2.4-4.5-6.3-3.5-10.1 2.1-7.5 5.2-19.6 11.9-15.4.5-9.1 5.1-25.4 17.6-20.4h4.9c12.5-5 17.1 11.3 17.6 20.4 6.6-4.3 9.8 7.9 11.9 15.4 1 3.7-.3 7.7-3.5 10.1-4.5 3.4-13 5.2-19.5 6-5.8.8-11.7.8-17.5 0-6.6-.9-15.4-2.6-19.9-6z"
                />
                <path
                  className="st42"
                  d="M948.7 569.9c-3.1-2.4-4.5-6.3-3.5-10.1 2.1-7.5 5.2-19.6 11.9-15.4.5-9.1 5.1-25.4 17.6-20.4h4.9c12.5-5 17.1 11.3 17.6 20.4 6.6-4.3 9.8 7.9 11.9 15.4 1 3.7-.3 7.7-3.5 10.1-4.5 3.4-13 5.2-19.5 6-5.8.8-11.7.8-17.5 0-6.6-.9-15.4-2.6-19.9-6zM970.4 506.5c-.7 2-1.2 4-1.5 6.1M984.9 504.5c.5.4 2 4.9 1.9 7"
                />
                <path
                  className="st42"
                  d="M967.8 549.8h0c-.7-1.2-2.4-1.2-3.1-.1-2.9 4.4-3.6 9.2-4.5 14.2M973.5 526.7c-5.6-3-9.8 13.4-10.2 19M980 551.3c.8-.3 1.7.1 2.2.8.5.6.8 1.4 1 2.3.9 3.6 1 7.3.4 10.9M986.5 558.5c.3 2.6.3 5.3-.1 8"
                />
              </g>
              <path
                className="st124"
                d="M1026.3 547.6c0 1.8-2.7 3.2-6 3.2s-6-1.4-6-3.2-.7-4.2 6-4.2c7-.1 6 2.4 6 4.2z"
              />
              <ellipse className="st125" cx={1020.4} cy={545.2} rx={6} ry={3.2} />
              <ellipse className="st126" cx={1020.4} cy={545.2} rx={2.4} ry={1.3} />
              <path
                className="st124"
                d="M939 547.7c0 1.8-2.7 3.2-6 3.2s-6-1.4-6-3.2-.7-4.2 6-4.2c6.9 0 6 2.4 6 4.2z"
              />
              <ellipse className="st125" cx={933.1} cy={545.2} rx={6} ry={3.2} />
              <ellipse className="st126" cx={933.1} cy={545.2} rx={2.4} ry={1.3} />
              <path
                className="st124"
                d="M1029.5 580.8c0 2-3 3.6-6.6 3.6-3.7 0-6.6-1.6-6.6-3.6 0-7.5 3-4.6 6.6-4.6s6.6-2.9 6.6 4.6z"
              />
              <ellipse className="st125" cx={1022.9} cy={577.7} rx={6.6} ry={3.6} />
              <ellipse className="st126" cx={1022.9} cy={577.7} rx={2.9} ry={1.6} />
              <path
                className="st124"
                d="M984 594.5c0 2-3 3.6-6.6 3.6s-6.6-1.6-6.6-3.6c0-7.5 3-4.6 6.6-4.6s6.6-3 6.6 4.6z"
              />
              <ellipse className="st125" cx={977.4} cy={591.4} rx={6.6} ry={3.6} />
              <ellipse className="st126" cx={977.4} cy={591.4} rx={2.9} ry={1.6} />
              <path
                className="st124"
                d="M938.1 580.8c0 2-3 3.6-6.6 3.6-3.7 0-6.6-1.6-6.6-3.6 0-7.5 3-4.6 6.6-4.6s6.6-2.9 6.6 4.6z"
              />
              <ellipse className="st125" cx={931.5} cy={577.7} rx={6.6} ry={3.6} />
              <ellipse className="st126" cx={931.5} cy={577.7} rx={2.9} ry={1.6} />
            </g>

            <g id="post_office_x5F_on" onMouseLeave={()=>setActivePostOffice(false)} style={{display: isActivePostOffice? "block" : "none"}}>
              <path
                className="sst9"
                d="M837.6 335.2c-.8.2-1.5.8-2.3 1.2-.1.1-.6 3.3-1.1 4.7-.9-1.4-5.1-6-5.5-6.9-2-4.2 7.3-9.7 10-6.5 1.8 2 2.2 6.3 4 8.7-1.3.1-4.7-1.3-5.1-1.2z"
              />
              <path className="sst8" d="m823.6 367.1 11.4-33.5 33.6 5.5" />
              <path
                className="sst8"
                d="m825.9 365.7-7.7-15.5 44.1-23.3 5.8 15.6-6.5 25.2-29.7 9.1z"
              />
              <linearGradient
                id="SVGID_00000181056523028958922630000009517979585166698936_"
                gradientUnits="userSpaceOnUse"
                x1={832.293}
                y1={972.132}
                x2={855.384}
                y2={959.747}
                gradientTransform="matrix(1 0 0 -1 0 1320)"
              >
                <stop
                  offset={0}
                  style={{
                    stopColor: "red",
                  }}
                />
                <stop
                  offset={0.224}
                  style={{
                    stopColor: "#f27900",
                  }}
                />
                <stop
                  offset={0.418}
                  style={{
                    stopColor: "#f7ff00",
                  }}
                />
                <stop
                  offset={0.44}
                  style={{
                    stopColor: "#f1fd01",
                  }}
                />
                <stop
                  offset={0.47}
                  style={{
                    stopColor: "#e0f905",
                  }}
                />
                <stop
                  offset={0.504}
                  style={{
                    stopColor: "#c3f10b",
                  }}
                />
                <stop
                  offset={0.542}
                  style={{
                    stopColor: "#9be714",
                  }}
                />
                <stop
                  offset={0.582}
                  style={{
                    stopColor: "#68d91f",
                  }}
                />
                <stop
                  offset={0.624}
                  style={{
                    stopColor: "#2bc92d",
                  }}
                />
                <stop
                  offset={0.651}
                  style={{
                    stopColor: "#00be36",
                  }}
                />
                <stop
                  offset={0.851}
                  style={{
                    stopColor: "#006dff",
                  }}
                />
                <stop
                  offset={1}
                  style={{
                    stopColor: "#2e2f6b",
                  }}
                />
              </linearGradient>
              <path
                style={{
                  fill: "url(#SVGID_00000181056523028958922630000009517979585166698936_)",
                }}
                d="M840.4 347.3c-1.8-1.3-3.4-1.7-5.1-1.7-1.4 0-2.4.5-3 .8-.3.2-.5.5-.5.9.2 3.5 3.8 5.3 3.8 5.3.1 0 .1.1.1.2 0 0 .1.9.4 2.1l.2.6c.1.5.3.9.5 1.3l.3.6c.2.4.4.8.7 1.2l.4.5c.3.3.6.7 1 .9.6.4 1.2.8 1.9.8.5 0 2.2.2 1.9.8-.4.8-1.4 2.9 1.2 9.8l15.5-6.6s-1.6-6.4-6.6-8.1c0 0 .7-1.1 1.1-1.7.5-.8.7-1.7.7-2.6 0-.5 0-1-.1-1.5l-.1-.5v-.1c-.1-.4-.3-.9-.5-1.3v-.1l-.2-.3-.1-.1c-.2-.3-.4-.7-.6-1.1l-.4-.5c-.7-1-1.4-1.7-1.4-1.7l-.1-.1c-.5-4-2.4-5.4-3.3-5.9-.2-.1-.4-.1-.6 0-2.4 1-3.1 3.1-3.1 3.1s.9 1.7 1 2.1c-.1 0-1.2-1.7-1.5-1.9l-.2-.1v.2c0 .6-.5 1.8-.7 2.2-.2-.3-.5-1-1.2-1.4l-.3-.2.1.3c.1.4.1 1.9 0 2.4-1-.9-1.5-1.1-1.8-1.2l-.3-.1"
              />
              <path
                className="sst130"
                d="M852.3 358.1c.2-.1.5-.3.7-.4.2-.2.4-.4.5-.6.1-.1.1-.2.1-.3 0-.1-.1-.2-.2-.3-.1-.1-.2-.1-.3-.1s-.2.1-.3.2-.2.3-.3.4l.1-.1c-.1.1-.2.2-.4.3 0 0 .1 0 .1-.1-.1.1-.3.2-.4.2-.1.1-.2.1-.2.3v.4c.1.1.1.2.3.2.1-.1.2-.1.3-.1zM854.1 359.6c0 .1 0 .1 0 0 .3.2.6.4.9.7l-.1-.1c.5.5.9 1 1.3 1.6 0 0 0-.1-.1-.1.4.6.8 1.3 1.1 2 .1.2.4.3.6.2.2-.1.3-.4.2-.6-.3-.6-.7-1.3-1-1.9-.4-.7-.8-1.3-1.4-1.8-.2-.2-.4-.3-.6-.5-.2-.1-.4-.3-.6-.4-.1-.1-.3 0-.4 0-.1 0-.2.1-.2.3v.4s0 .1.1.1c.1.1.1.1.2.1z"
              />
              <g
                style={{
                  opacity: 0.18,
                }}
              >
                <path d="M844.2 360.5c-.1 0-.2.1-.3.1h-.8c-.2 0-.4.3-.4.5 0 .1.1.2.2.3-.2.3-.3.5-.4.8-.2.6-.2 1.1-.2 1.7 0 1.3.3 2.5.6 3.7l.6 1.8c.1.2.4.3.6.2.2-.1.3-.4.2-.6l-.6-1.8c-.2-.8-.4-1.7-.5-2.6v-.7c0-.5 0-1 .2-1.5.1-.2.1-.4.2-.6.1-.2.2-.4.4-.5.2 0 .4-.1.5-.2.2-.1.3-.4.2-.6 0 0-.3-.1-.5 0zM846.8 368.7c-.3-.7-.5-1.4-.7-2.1-.2-.6-.3-1.3-.3-1.9 0-.4 0-.8.1-1.1v.1-.3c0-.1-.1-.2-.3-.2h-.4c-.1.1-.2.1-.2.3-.1.4-.2.8-.2 1.2 0 .4 0 .8.1 1.2.1.4.2.7.3 1.1s.2.7.4 1.1c.1.4.3.7.4 1.1.1.2.4.3.6.2.2-.2.3-.5.2-.7zM841.8 360.4c-.7-.1-1.2-.3-1.8-.6-.4-.2-.7-.5-1-.7-.4-.4-.7-.8-1-1.3-.4-.7-.7-1.4-1-2.2-.3-.9-.4-1.8-.5-2.7 0-.1-.1-.2-.1-.2v-.2s0-.1-.1-.1c-.1-.1-.1-.1-.2-.1-.4-.2-.7-.4-1-.7-.2-.1-.3-.3-.5-.4-.1-.1-.3-.2-.4-.3-.4-.3-.6-.8-.9-1.2-.3-.5-.6-1-.8-1.6-.1-.2-.1-.4-.1-.6v-.4c.1-.2 0-.5-.3-.6-.2-.1-.5 0-.6.3-.2.5-.1 1 0 1.5.1.3.2.5.3.8l.3.6c.3.5.5.9.9 1.4.1.2.3.4.5.6s.4.4.7.6c.5.4.9.7 1.4 1 .1.8.2 1.7.4 2.5s.5 1.6.9 2.3c.3.5.6 1 1 1.5s.9.9 1.4 1.2c.6.4 1.4.7 2.1.9.1 0 .3.1.4.1.1 0 .3 0 .3-.1.1-.1.2-.2.2-.3 0-.1 0-.2-.1-.3-.2-.6-.3-.6-.4-.7z" />
              </g>
              <path
                className="sst130"
                d="M840.9 347.2c.1-.2.1-.4.1-.6 0-.3 0-.5-.1-.8-.1-.5-.2-.9-.4-1.4-.1-.1-.1-.3-.2-.4-.1-.1-.2-.2-.3-.2s-.3 0-.3.1c-.1.1-.2.2-.2.3 0 .1 0 .2.1.3 0 0 0-.1-.1-.1.1.1.1.2.1.3.1.2.1.4.2.6v-.1c.1.4.2.9.3 1.4v-.1.4-.1s0 .1-.1.1c-.1.1 0 .3 0 .4s.1.2.3.2h.4c.1-.1.2-.1.2-.3zM842.5 345.4c0-.4-.1-.9-.1-1.3 0-.5-.1-1-.4-1.4-.1-.2-.5-.2-.6-.1-.2.2-.2.4-.1.6 0 0 0 .1.1.1 0 0 0-.1-.1-.1.1.1.1.2.1.3v-.1c.1.3.1.7.1 1s.1.7.1 1c0 .1.1.2.2.3.1.1.2.1.3.1s.2-.1.3-.2c.1 0 .1-.1.1-.2zM843.9 344.6c.3-.8.4-1.7.3-2.5 0-.1-.1-.2-.2-.3-.1-.1-.2-.1-.3-.1-.3.1-.4.3-.4.5v.3-.1c0 .5 0 .9-.2 1.4v-.1c0 .2-.1.4-.2.6-.1.2 0 .5.3.6.4.1.6 0 .7-.3z"
              />
              <path
                className="sst130"
                d="M845.1 342.5v-.3.1c0-.2.1-.4.2-.5 0 0 0 .1-.1.1.2-.4.5-.7.8-1l-.1.1c.4-.4.8-.8 1.3-1.1.1-.1.2-.1.3-.2 0 0-.1 0-.1.1l.1-.1c.2-.1.3-.4.2-.6s-.4-.3-.6-.2c-.1 0-.2.1-.3.1-.1.1-.2.1-.2.2-.2.2-.5.3-.7.5-.3.3-.6.5-.8.8s-.5.5-.6.8c-.2.3-.4.7-.4 1.2 0 .1 0 .2.1.3.1.1.2.2.3.2s.2 0 .3-.1c.2-.2.3-.3.3-.4z"
              />
              <path
                className="sst132"
                d="M832.5 346.9c.4-.2.8-.4 1.2-.5h.1c.1 0-.1 0 0 0h.1c.1 0 .2 0 .3-.1.2 0 .4-.1.6-.1h.5c.1 0-.1 0 0 0h.5c.3 0 .7.1 1 .2h.1c.1 0-.1 0 0 0h.1c.1 0 .2 0 .2.1.2 0 .3.1.5.1.3.1.6.2.8.3.1.1.2.1.4.2h.1c.1 0 .1.1.2.1.2.1.4.2.5.3.2.1.4.2.5.4.1.1.3.1.4-.1.1-.1.1-.3-.1-.4-.1-.1-.3-.2-.4-.3-.4-.3-.8-.5-1.2-.7-.6-.3-1.1-.5-1.7-.6-.7-.2-1.5-.3-2.2-.2-.8 0-1.6.3-2.4.6-.1 0-.2.1-.3.2-.1 0-.1.1-.2.2v.2c.1.1.2.2.4.1zM847.8 339.4c.2.1.3.2.5.4.1 0 .1.1.2.1l.1.1c.1.1.2.3.4.4.1.2.3.3.4.5.1.1.1.2.2.3v.1s.1.1 0 0c0-.1 0 0 0 0s0 .1.1.1c.3.5.5 1 .7 1.5 0 .1 0 .1.1.2v.2s0 .1 0 0v.2c0 .1 0 .2.1.2.1.3.1.7.2 1 0 .2 0 .4.1.5.2.2.4.4.5.6.3.3.6.7.9 1.1.2.2.3.5.5.7 0 0 0 .1.1.1 0 0 0 .1 0 0 0 .1.1.1.1.2.1.1.2.3.2.4.3.6.6 1.2.8 1.8v.1c0 .1 0-.1 0 0v.1c0 .1 0 .2.1.2 0 .2.1.3.1.5s0 .3.1.5v.5c0-.1 0 0 0 0 0 .4 0 .7-.1 1 0 .1 0 .2-.1.3v.1c0 .1 0-.1 0 0v.1c0 .2-.1.4-.2.5-.1.2-.1.4-.2.5 0 0 0 .1-.1.1 0 .1 0 0 0 0v.1c-.1.1-.1.2-.2.3-.1.2-.2.3-.4.5-.1.1-.1.2-.2.3l-.1.1-.1.1s-.1.1 0 0l-.1.1-.1.1c-.1.1-.2.2-.3.2-.1.1-.2.4-.1.5.1.1.4.2.5.1 1-.9 1.8-2 2.2-3.3.3-1.1.3-2.2.1-3.3-.2-1-.6-1.9-1.1-2.8-.4-.7-.9-1.4-1.4-2.1-.2-.2-.3-.4-.5-.6l-.3-.3c0 .1.1.1.1.2-.1-1.3-.5-2.5-1.1-3.7-.4-.8-.9-1.5-1.6-2-.2-.2-.4-.3-.6-.5-.2-.1-.4-.1-.5.1-.2.3-.2.5 0 .7zM853.5 357.5c.1 0 .3.1.4.2.1 0 .1.1.2.1h.1c.1 0-.1 0 0 0 0 0 .1 0 .1.1.2.1.4.3.6.4.3.2.5.4.8.7l-.1-.1c.6.6 1.1 1.2 1.6 1.9.2.2.3.5.5.7 0 0 0-.1-.1-.1.3.5.6 1 .8 1.5.1.2.3.3.5.2.2-.1.3-.3.2-.5-.4-.9-.9-1.7-1.5-2.5-.4-.6-.9-1.1-1.4-1.6-.4-.4-.8-.7-1.2-1-.3-.2-.6-.4-.9-.5-.1-.1-.2-.1-.4-.1h-.3c-.1 0-.2.1-.2.2v.3c.1 0 .2.1.3.1z"
              />
              <path
                className="sst17"
                d="M844.5 360.9c-2.2.7-4.1.5-5.6-.5-2.9-2-3.5-6.4-3.6-7.4-.8-.4-3.8-2.3-4-5.7 0-.6.2-1.1.7-1.4 1.2-.7 4.5-2.1 8.9 1.3.1.1.2.3.1.5-.1.1-.3.2-.5.1-4.1-3.1-7.1-1.9-8.2-1.2-.3.2-.4.5-.4.8.2 3.4 3.7 5.2 3.8 5.2.1.1.2.2.2.3 0 .1.4 5.1 3.3 7.1 1.3.9 3 1.1 5 .5.2-.1.4 0 .4.2.2 0 .1.2-.1.2z"
              />
              <path
                className="sst17"
                d="M840.4 347.4h-.2c-.2 0-.3-.2-.3-.4 0 0 .1-1.5-.6-2.3-.1-.1-.1-.3-.1-.4s.1-.3.3-.3c.6-.3 1.5.2 2.8 1.4.1.1.1.3 0 .5-.1.1-.3.1-.5 0-1-.9-1.5-1.2-1.8-1.3.7 1.1.5 2.5.5 2.6.1.1 0 .2-.1.2z"
              />
              <path
                className="sst17"
                d="M843.6 344.9c-.2.1-.4 0-.4-.2 0 0-.4-.9-1.2-1.5.2.6.3 1.5-.2 2-.1.1-.3.2-.5 0-.1-.1-.2-.3 0-.5.4-.5 0-1.6-.2-1.9-.1-.2 0-.4.1-.5s.3-.2.5-.1c1.4.6 2 2.1 2.1 2.1.1.4 0 .6-.2.6z"
              />
              <path
                className="sst17"
                d="M845.6 344.3c-.2.1-.3 0-.4-.1-.5-.9-.8-1.5-1.1-1.7 0 1-.4 1.9-.5 1.9-.1.2-.3.2-.4.1-.2-.1-.2-.3-.1-.4 0 0 .5-.9.4-1.8 0-.2.1-.4.2-.5.2-.1.4-.1.6-.1.4.2.8.6 1.6 2.1-.1.2-.1.4-.3.5z"
              />
              <path
                className="sst17"
                d="M852.2 357.7c-.2.1-.3 0-.4-.1-.1-.2 0-.4.1-.5.5-.3.7-.4.7-.4 1.4-1.2 2.2-2.7 2.2-4.3.1-3.7-3.4-7.1-3.4-7.1-.1-.1-.1-.1-.1-.2-.5-3.9-2.4-5.4-3.2-5.8-.1-.1-.3-.1-.4 0-2.4 1-2.9 2.9-2.9 2.9 0 .2-.2.3-.4.2-.2 0-.3-.2-.2-.4 0-.1.7-2.3 3.3-3.3.3-.1.7-.1 1 .1.9.5 3 2 3.5 6.2.6.6 3.6 3.8 3.5 7.5 0 1.8-.9 3.4-2.4 4.8-.1-.2-.4.1-.9.4zM837 355.3c-1.8.8-3.6-.4-3.6-.4-.1-.1-.2-.3-.1-.5.1-.1.3-.2.5-.1.1.1 1.9 1.3 3.6-.1.1-.1.4-.1.5 0s.1.4 0 .5c-.4.4-.7.5-.9.6zM837.2 357.4c-1.4.6-2.9.1-2.9.1-.2-.1-.3-.2-.2-.4.1-.2.2-.3.4-.2.1 0 2.2.7 3.6-1 .1-.1.3-.2.5 0 .1.1.2.3 0 .5-.5.5-.9.8-1.4 1z"
              />
              <g className="sst133">
                <path
                  className="sst26"
                  d="M841 353.3c-2 .3-.1 3.9 1.1 1.8.1-.1.2-.1.2 0 .2.1.4.2.6.2 1.2-.4.6-1.3.9-1.1h.1c.4 0 .7-.1 1-.4.5-.7.2-1.3-.3-1.3-.1 0-.1-.1-.2-.2-.2-1-1.5-.6-1.6.1 0 .3-.5-.4-1.1-.1-.9.3-.5.9-.7 1z"
                />
              </g>
              <g className="sst133">
                <path
                  className="sst26"
                  d="M850.6 348.8c1.6-1.3 2.9 2.5.6 2.1-.1 0-.2 0-.2.2s-.1.4-.3.5c-1.1.6-1.3-.4-1.4-.1-.2.3-.6.4-.9.4-.8-.1-1-.7-.7-1.1.1-.1 0-.2 0-.2-.5-.8.5-1.5 1.2-1.1.2.2 0-.6.7-.9.6-.3.8.4 1 .2z"
                />
              </g>
              <path
                className="sst17"
                d="M837.4 359.5c-.9.4-1.7.5-1.8.5-.2 0-.3-.1-.4-.3 0-.2.1-.3.3-.4 0 0 2.3-.2 3-1.7.1-.2.3-.2.4-.1.2.1.2.3.1.4-.2.8-.9 1.3-1.6 1.6z"
              />
              <path
                className="sst26"
                d="M847.9 340.6s.6.2.8 1c0 0 .4 1.8.1 2.2l-1.5.2-.2-.6.2-1.4c-.1 0-.1-.7.6-1.4z"
              />
              <path
                className="sst17"
                d="M849.1 344c-.3 0-.4-.2-.4-.3.1-2.1-.8-2.8-.8-2.8-.1-.1-.2-.3-.1-.5.1-.1.3-.2.5-.1 0 0 1.1.9 1.1 3.4-.1.2-.2.3-.3.3zM847.2 344.2c-.2.1-.4 0-.5-.2-.3-1.1.1-1.8.1-1.8.1-.2.3-.2.4-.1.2.1.2.3.1.4 0 0-.3.5 0 1.4.2.1.1.2-.1.3z"
              />
              <path
                className="sst17"
                d="M850.2 344.8h-.3c-.1 0-1.4-.9-3.4-.3-.2.1-.4 0-.4-.2-.1-.2 0-.4.2-.4 2.3-.8 3.9.3 4 .4.2.1.2.3.1.5-.1-.1-.2 0-.2 0z"
              />
              <path
                className="sst26"
                d="M833.8 347.5s-.5.9.2 1.7c0 0 1.7 1.6 2.3 1.6l1.3-1.4-.4-.6-1.5-.8c0-.1-.6-.6-1.9-.5z"
              />
              <path
                className="sst17"
                d="M836.2 351h-.3c-1.4-.6-2.3-1.4-2.6-2.3-.3-.7 0-1.3 0-1.3.1-.2.3-.2.4-.1.2.1.2.3.1.4 0 0-.2.3 0 .8s.7 1.2 2.2 1.9c.2.1.2.3.2.4.2.1.1.2 0 .2zM837.6 349.3c-.1.1-.3 0-.4-.1-.6-.9-1.3-.8-1.4-.8-.2 0-.3-.1-.3-.3 0-.2.1-.3.3-.3 0 0 1.1-.1 1.9 1.1.1 0 .1.2-.1.4 0-.1 0-.1 0 0z"
              />
              <path
                className="sst17"
                d="M836.4 352c-.2.1-.4-.1-.5-.2 0-.1-.4-1.9 2.6-3.6.2-.1.4 0 .5.1.1.2 0 .4-.1.5-2.5 1.5-2.2 2.9-2.2 2.9 0 .1-.1.3-.3.3zM843.9 369.9c-.2.1-.4 0-.4-.2-.7-1.6-1.1-3.5-1.2-4.8-.3-2.8.9-4.1.9-4.2.1-.1.3-.1.5 0 .1.1.1.3 0 .5 0 0-1.1 1.2-.8 3.6.2 1.3.6 3.2 1.2 4.6 0 .2-.1.4-.2.5zM859.3 363.1c-.2.1-.4 0-.4-.2-1.4-2.8-2.9-4.3-3.9-5-1.1-.8-1.8-.9-1.8-.9-.2 0-.3-.2-.3-.4s.2-.3.4-.3c.1 0 3.4.4 6.2 6.2.1.3 0 .5-.2.6zM846.2 369.2c-.2.1-.4 0-.4-.2-1.5-3.2-1-5.4-1-5.5 0-.2.2-.3.4-.3s.3.2.3.4c0 0-.4 2.1 1 5.1-.1.2-.2.4-.3.5 0-.1 0 0 0 0zM857.5 364.1c-.2.1-.4 0-.4-.2-1.3-3-3.1-4.1-3.2-4.1-.2-.1-.2-.3-.1-.5s.3-.2.5-.1c.1 0 2 1.2 3.4 4.5.1.1 0 .3-.2.4z"
              />
              <path
                className="sst26"
                d="M849.3 368.6c-.8-.7-2.2-3.5-.9-6.1.6-1.3 2.4-2.3 3.8-1.8 2.5.9 3.4 3.7 4.2 5.3"
              />
              <path
                className="sst17"
                d="M852.4 348c-.2.1-.3 0-.4-.1-.1-.2 0-.4.1-.4s1.3-.7 1.5-2.6c0-.2.2-.3.4-.3s.3.2.3.4c-.3 2.1-1.8 3-1.9 3zM854 349c-.5.2-.9.2-.9.2-.2 0-.3-.1-.4-.3 0-.2.1-.3.3-.4.1 0 1.5-.1 2.1-1.7.1-.2.3-.3.4-.2.2.1.3.3.2.4-.4 1.2-1.1 1.7-1.7 2zM855.8 350.7c-1.1.5-2.1.1-2.1.1-.2-.1-.2-.3-.2-.4.1-.2.3-.2.4-.2.1 0 1.3.5 2.5-.7.1-.1.3-.1.5 0 .1.1.1.3 0 .5-.4.3-.8.5-1.1.7zM842.6 349.8c0-.4.1-.9.4-1.3.7-.7 1.6-1 2.6-.8s1.4 1.2 1.3 2.1c-.1.3-.3.6-.4 1-.1.4 0 .6.1.9s.2.7-.2.9c-.5.2-.8-.5-.9-.8-.1-.4-.1-.8.1-1.2.2-.4.4-.8.3-1.3-.1-.4-.7-.7-1.2-.5-.4.2-.9.7-.7 1.1.1.2.5.4.3.7-.3.6-1 .3-1.2 0-.3-.2-.5-.5-.5-.8zM847.4 353.8c-.1.2-.2.3-.3.4s-.3.1-.5 0-.3-.2-.4-.3c-.1-.2-.1-.3 0-.5s.2-.3.3-.4.3-.1.5 0 .3.2.4.3c.1.1.1.3 0 .5z"
              />
              <path
                className="sst3"
                d="m772.3 444.9 3 67.1 75.3 24.6 77.6-38.7-2.9-63.3z"
              />
              <path
                className="sst4"
                d="m923.8 435.9-71.1 31.4c-4.1 1.8-8.7 2.1-13 .7l-65.3-20.8c-2.6-.8-3.1-4.2-.7-5.6l76-47.1L924 432c1.6.9 1.5 3.1-.2 3.9z"
              />
              <path className="sst5" d="m847.3 468.8 3.1 67" />
              <path
                className="sst6"
                d="m803.8 390.2 1.5 34.5 41.9 11.3 43.5-19.2-1.5-32.4z"
              />
              <path
                className="sst6"
                d="M889.2 384.4 845.5 399l-41.7-8.8 43.8-14.6z"
              />
              <path className="sst7" d="m845.5 399.9 1.5 34.4" />
              <path
                className="sst8"
                d="m823.6 367.1 8.1 21.5 18.8-.3 28.7-20.7-10.6-28.5-15.8 26.1z"
              />
              <path className="sst10" d="m869 484.3 1.3 30.1 40.2-17.4-1.2-26.3z" />
              <path
                className="sst5"
                d="m848 482.5-75.1-25.1M848.4 493.2l-75-25.1M848.9 503.9l-75-25.1M849.4 514.7l-75.1-25.2M849.9 525.4l-75.1-25.2M848.2 482.1l77.7-35.1M848.7 493.2l77.4-35M910.1 476.1c5.5-2.5 11-5 16.5-7.4M849.2 503.9c6.9-2.8 13.5-6.3 20.3-9.3M910.7 486.4c5.4-2.5 10.8-5.1 16.1-7.6M849.7 514.7c6.7-3.1 13.4-6.1 20.1-9.3M911 496c5.4-2.6 11-4.9 16.1-7.8M850.1 525.3c6.7-3.2 13.3-6.5 20-9.7M788 462.6l.5 10.2M806 479.5l.4 10.2M791.4 485l.5 10.2M797.7 497.9l.4 10.2M833.6 499.6l.5 9.8M821.1 505.4l.4 10.2M842.7 491.4l.5 10.2M860.9 477.3l.5 10.2M885.6 453.6l.4 10.3M911.4 454l.5 10.2M922.9 460.4l.5 9.4M855.4 501.8l.4 9.4M864.3 518.7l.5 10.2M919 482.6l.5 9.4M824.7 475.1l.5 10.1M815.2 460.5l.4 10.1M779.8 449.6l.4 9.4M810.3 512.6l.4 10.2M784.5 503.7l.4 10.2"
              />
              <path
                className="sst11"
                d="M815.9 427.6c-.6-6.3-5.7-13.4-2.3-16.3.3-.2 6.1-4.5 9-4.7 5.9-.6 12.8 7 13.9 19.1.2 2.3.3 5.3.1 7.4l-6.9 5.4-13.8-10.9z"
              />
              <path
                className="sst8"
                d="M808.9 433c-1.1-12.1 2-22.3 7.9-22.9s11.6 8.8 12.7 21c.2 2.3.3 5.3.1 7.4l-20.7-5.5z"
              />
              <path
                className="sst7"
                d="m809.7 427.6 18.7 3.8M810.2 421.4l17.4 3.2M811.7 415.5l13.7 2.2M817.6 410.8l1.1 24.6"
              />
              <path
                className="sst11"
                d="M880.2 424.1c0-6.3 4.5-13.9.8-16.4-.3-.2-6.5-3.9-9.4-3.9-6 0-12.1 8.1-12.2 20.2 0 2.3.2 5.3.5 7.4l7.4 4.7 12.9-12z"
              />
              <path
                className="sst8"
                d="M887.6 428.9c0-12.2-4-22.1-9.9-22.1-6 0-10.8 9.9-10.8 22 0 2.3.2 5.3.5 7.4l20.2-7.3z"
              />
              <path
                className="sst7"
                d="M886.3 423.5 868 429M885.3 417.5l-17.1 4.7M883.2 411.7l-13.4 3.5M876.9 407.6l1.1 24.5"
              />
              <path
                className="sst6"
                d="m870.6 520.4.4 6.1 20.3 8.5 37.7-23.6-13.6-5.5c.1 0-44.5 14.5-44.8 14.5z"
              />
              <path
                className="sst6"
                d="m891.2 528.4.3 6.7 38-17.2-.3-6.2c0-.1-37.8 16.7-38 16.7z"
              />
              <path className="sst7" d="m884.4 525.8 6.8 2.6" />
              <path
                className="sst6"
                d="m870.3 513.5.3 6.7 13.6 5.6 37.7-23.6-13.6-4.7s-37.8 16-38 16z"
              />
              <path
                className="sst6"
                d="m884 519.1.3 6.7 38-17.2-.3-6.2c-.1-.1-37.8 16.7-38 16.7z"
              />
              <path className="sst7" d="m870.8 514.3 13.2 4.8" />
              <path
                className="sst6"
                d="M880.2 514.5h0c-1.2.1-2.3-.9-2.4-2.2l-1.4-30.1c-.1-1.2.9-2.3 2.2-2.4h0c1.2-.1 2.3.9 2.4 2.2l1.4 30.1c0 1.3-.9 2.3-2.2 2.4z"
              />
              <path
                className="sst12"
                d="M804.3 409.5c-2.3.1-2.3 1.6-3.1 3.8-.8 2.1-.8 4.5-.4 6.8.6 4.4 2.1 8.8 4.3 12.7 3.1 5.6 7.8 10.5 9.7 16.7 1.8 5.8.9 12.4-2.4 17.5-1.6 2.4-3.6 4.5-5.3 6.8-4.6 6.3-6.5 14.6-5 22.3"
              />
              <path
                className="sst13"
                d="M799.4 429.4c-2 .4-3.9 1.6-5.1 3.3 1.8 1 3.7 2 5.7 2.1 5.6.2 5.5-6.5-.6-5.4zM820.9 455.4c1.8 1 3.2 2.8 3.7 4.8-2 .4-4.1.7-6.1.1-5.2-1.7-2.9-7.9 2.4-4.9zM817.7 467.7c1.3 1.6 2 3.8 1.8 5.8-2-.4-4.1-.8-5.8-2.1-4.3-3.3 0-8.4 4-3.7zM809.9 478.8c1.3 1.6 2 3.8 1.8 5.8-2-.4-4.1-.8-5.8-2.1-4.3-3.3.1-8.4 4-3.7zM830.9 440.2c1.5-1.4 3.7-2.1 5.7-2-.3 2-.6 4.2-1.8 5.8-3.2 4.4-8.4.4-3.9-3.8zM847.3 443.5c.7-2 2.2-3.7 4.1-4.5.7 1.9 1.5 4 1.2 6-.7 5.4-7.2 4.3-5.3-1.5zM857.4 441.9c1.3-1.6 3.3-2.6 5.3-2.8 0 2.1 0 4.2-.9 6-2.5 4.8-8.3 1.5-4.4-3.2zM882.3 435.2c1.3-1.6 3.3-2.6 5.3-2.8 0 2.1 0 4.2-.9 6-2.5 4.8-8.2 1.6-4.4-3.2zM892.8 432c-.7-2-.5-4.2.5-6 1.7 1.1 3.6 2.3 4.6 4.1 2.7 4.7-3.1 7.7-5.1 1.9zM835.4 453.2c1.6 1.3 3.8 1.8 5.9 1.5-.5-2-1-4.1-2.3-5.7-3.6-4-8.5.5-3.6 4.2zM852.9 453.6c.9 1.9 2.5 3.4 4.5 4.1.5-2 1.1-4.1.6-6.1-1.1-5.2-7.6-3.5-5.1 2zM802 416.7c1.5-1.5 3.5-2.3 5.6-2.3-.2 2-.4 4.2-1.6 5.9-2.9 4.6-8.3.7-4-3.6z"
              />
              <path
                className="sst13"
                d="M795.9 414.3c-2 .4-3.9 1.6-5.1 3.3 1.8 1 3.7 2 5.7 2.1 5.5.2 5.5-6.4-.6-5.4zM799.5 405.5c-1.9-.8-4.2-.8-6.1 0 .9 1.8 1.9 3.7 3.7 4.9 4.5 3.1 8.1-2.5 2.4-4.9z"
              />
              <path
                className="sst12"
                d="M814 447.6c2.9-2.1 6.3-2.7 9.9-2.6 3.6.2 7.1 1.1 10.6 1.9 8.9 2 18.3 2.8 27 0 7.4-2.4 14.6-7.4 22.3-6.2 1.3.2 2.6.6 4 .6 3.2 0 6.1-2.1 8.2-4.5 4.1-4.7 6.5-10.6 7.5-16.7.4-2.2.5-4.9-1.2-6.4-1.2-1.1-3-1.3-4.7-.9-1.6.4-3 1.3-4.4 2.3"
              />
              <path
                className="sst13"
                d="M811 445.3c-2.1-.1-4.2.6-5.7 2 1.5 1.4 3.1 2.9 5.1 3.5 5.1 1.4 6.6-5 .6-5.5zM809.8 456.9c-1.9.9-3.4 2.6-4.1 4.5 2 .5 4.1 1 6.1.5 5.3-1.2 3.5-7.6-2-5zM803.1 468.8c-2.1 0-4.1 1-5.6 2.5 1.6 1.3 3.3 2.6 5.3 3 5.4 1 6.4-5.5.3-5.5zM802.7 437.2c-1.8.9-3.3 2.7-3.9 4.7 2 .4 4.1.9 6.1.3 5.3-1.5 3.2-7.9-2.2-5zM885 446.7c1.1 1.8 3 3 5 3.4.2-2 .5-4.2-.2-6.1-1.9-5.1-8.1-2.4-4.8 2.7zM898.6 442.8c2.1.1 4.2-.7 5.7-2.1-1.5-1.4-3.1-2.8-5.1-3.3-5.3-1.4-6.7 5.1-.6 5.4zM906.6 430.8c2-.5 3.8-1.9 4.8-3.7-1.9-.9-3.8-1.7-5.9-1.7-5.5.3-4.9 6.9 1.1 5.4zM905.9 409.5c-.6-2-1.9-3.8-3.8-4.7-.8 1.9-1.7 3.9-1.6 5.9.4 5.4 7 4.7 5.4-1.2zM870.2 449.7c1.8 1.1 4 1.4 6 .8-.7-1.9-1.4-4-2.9-5.3-4.1-3.7-8.4 1.3-3.1 4.5zM897.4 421.9c-1-1.8-1.3-4-.8-6 2 .7 4 1.5 5.3 3 3.7 4-1.4 8.2-4.5 3zM812.1 436c1.5-1.4 3.7-2.1 5.7-2-.3 2-.6 4.2-1.8 5.8-3.1 4.4-8.3.3-3.9-3.8z"
              />
              <path
                className="sst6"
                d="M910.7 501.5h0c-1.2.1-2.3-.9-2.4-2.2l-1.4-30.1c-.1-1.2.9-2.3 2.2-2.4h0c1.2-.1 2.3.9 2.4 2.2l1.4 30.1c0 1.3-.9 2.4-2.2 2.4z"
              />
              <path
                className="sst6"
                d="m868.6 476.5.4 7.9 13.6 5.6 37.7-24.8-13.6-5.5c-.1 0-37.8 16.8-38.1 16.8z"
              />
              <path
                className="sst6"
                d="m882.3 482.1.4 7.9 38-17.2-.3-7.4c-.1-.1-37.9 16.7-38.1 16.7z"
              />
              <path className="sst7" d="m869.1 477.2 13.2 4.9" />
              <path
                className="sst14"
                d="M764.3 413.7c0 .6.1 1.2.1 1.9.6-.2 1.3-.4 2-.6"
              />
              <path
                className="sst14"
                d="M765.8 413.7c-1 1.2-1.8 2.5-2.4 3.9M768.7 415.8l-.6 1.8c.7 0 1.3.1 2 .2"
              />
              <path className="sst14" d="M770.1 416.4c-1.4.7-2.6 1.6-3.8 2.7" />
              <path className="sst16" d="M754.4 423.5c0-4.1 2.6-7 4.2-3.6" />
              <path
                className="sst16"
                d="M754.6 431.1c1.4.6 4.3-1.2 4.9-3.1 8.3 1.5 10-6.5 4.8-4.4 6.2-2.4-.1-7.8-3.8-6.2-1.7.9-2.5 4.8-4.5 5.3-4.5 1.1-5.9 6.6-1.4 8.4z"
              />
              <path
                className="sst134"
                d="M755.3 432.2c.1.3.5.3.6 0 .3-.8.7-1.8.7-2 0-.1-.1-.7-1-.8h-.1c-.5 0-.8.5-.7 1.1.2.5.4 1.2.5 1.7z"
              />
              <path className="sst135" d="m755.7 427.5.5.7M753.7 428.1l.5.7" />
              <path className="sst14" d="M758.9 429.6c.8 1.6 1.6 2.2 3.1 2.5" />
              <path
                className="sst19"
                d="M756.6 436.8c0 .1 0 .1.1.1 1 2.5 4.1 4.5 6.6 3.7 2-.5 3.7-1.8 5.4-3s2.3-4.2 1.5-6.2c-1.6-3.9-7.1-1.9-11.3 0-2 1-3.1 3.3-2.3 5.4z"
              />
              <path
                className="sst14"
                d="M766.3 426.5c.6 1 .7 3.2-.1 4.2M756 422.3c0-2 7-1.1 8.7 1"
              />
              <path className="sst20" d="m756.8 435.8 7.1-.4 5.4-5.1" />
              <path
                className="sst21"
                d="M763.4 437.5c-.6 0-1-.2-1.3-.6s-.4-1-.5-1.6c-.1-.4-.2-.9-.4-1.2-.1-.2-.1-.3 0-.5s.3-.3.4-.3c.3 0 .7.2 1.2.4.1 0 .2.1.3.1s.1-.1.2-.1h.1v-.1c.1-.3.3-.8.4-1.1.1-.2.3-.3.4-.3.2 0 .4.1.4.3.1.2.4.6.7 1.1.5.7.7 1.1.8 1.2.2.5.1.9-.3 1.4-.4.8-1.5 1.3-2.4 1.3z"
              />
              <path
                className="sst17"
                d="M764.3 432.8c.2.4 1.3 2 1.4 2.3.3 1-1.2 2-2.3 2-.4 0-.7-.1-.9-.4-.5-.7-.4-2-.9-2.7.4 0 1.3.5 1.5.5.2 0 .5-.2.7-.3.1 0 .3-1 .5-1.4m0-1c-.4 0-.7.2-.9.6-.1.2-.2.6-.4 1-.6-.3-1-.4-1.4-.4s-.7.2-.9.5-.2.7 0 1c.1.2.2.7.3 1.1.1.6.3 1.2.6 1.7.4.5 1 .8 1.7.8 1.1 0 2.4-.6 3-1.5.4-.6.5-1.2.3-1.8-.1-.3-.3-.6-.8-1.4-.2-.4-.6-.9-.6-1-.2-.4-.5-.6-.9-.6z"
              />
              <path className="sst14" d="m903.4 354.4.6 1.5c-.6 0-1.2.2-1.7.3" />
              <path
                className="sst14"
                d="M902.2 355c1.2.5 2.4 1.2 3.4 2.1M900.8 357.8c.4.4.7.8 1.1 1.2l-1.5.9"
              />
              <path className="sst14" d="M899.9 358.8c1.3 0 2.6.2 3.9.6" />
              <path className="sst16" d="M914.8 358.4c-1.6-3.2-4.7-4.4-4.6-1.2" />
              <path
                className="sst16"
                d="M917.5 364.3c-.9 1-3.8.7-4.9-.5-5.9 4.3-10.2-1.3-5.3-1.6-5.7.5-2.9-6.1.6-6.3 1.6 0 3.8 2.7 5.4 2.4 3.8-.8 6.9 2.9 4.2 6z"
              />
              <path
                className="sst134"
                d="M917.3 365.4c0 .3-.3.4-.4.3-.5-.5-1.2-1.1-1.3-1.3-.1-.1-.2-.6.4-1 0 0 .1 0 .1-.1.4-.2.8.1 1 .5 0 .6.1 1.2.2 1.6z"
              />
              <path className="sst135" d="m915.3 361.9-.2.7M917.1 361.6l-.2.7" />
            </g>
            <g id="photo_studio_x5F_on" onMouseLeave={()=>setActivePhotoStudio(false)} style={{display: isActivePhotoStudio? "block" : "none"}}>
              <path
                className="sst22"
                d="M840.6 663.4c-.3 5.5-4.3 9.2-12.2 9.8-7.2.6-14.1-2.3-13.9-10.4.2-7.2 6.1-13 13.4-12.8 7.3.1 13.1 6.1 12.7 13.4z"
              />
              <path
                className="sst23"
                d="M833.3 653.2c-.7 3.6-2.2 7-5.9 7.4s-6.4-2.3-7.5-5.8c-.9-2.6-9.1-21.7-7.9-31.7.4-3.3 9.1-6.6 10.1-6.7.9-.1 10.2.9 11.4 4.1 3.4 9.5.3 30.1-.2 32.7z"
              />
              <path
                className="sst22"
                d="M873.5 643.1c.1 4.2-2.9 7.4-8.9 8.2-5.5.8-10.9-1.3-11.1-7.4-.2-5.5 4-10.2 9.6-10.4s10.3 4.1 10.4 9.6z"
              />
              <path
                className="sst23"
                d="M867.4 635.8c-.4 2.8-1.4 5.4-4.2 5.9s-5-1.4-6-4c-.8-1.9-8-16.1-7.6-23.8.1-2.6 6.6-5.5 7.4-5.6s7.8.2 8.8 2.5c3.2 7.1 1.9 22.9 1.6 25z"
              />
              <path
                className="sst22"
                d="M733.1 648.9c.3 4.2 3.5 7.1 9.5 7.5 5.5.3 10.7-2.2 10.5-8.3-.2-5.5-4.9-9.8-10.4-9.6s-10 4.9-9.6 10.4z"
              />
              <path
                className="sst23"
                d="M738.6 641c.6 2.8 1.8 5.3 4.6 5.6s4.8-1.8 5.7-4.5c.6-2 6.7-16.7 5.6-24.3-.3-2.5-7.1-4.9-7.8-5s-7.7.8-8.6 3.2c-2.6 7.3.1 23 .5 25z"
              />
              <path
                className="sst22"
                d="M768.5 666.6c.7 5.4 5.1 8.8 13 8.7 7.3-.1 13.9-3.5 13-11.5-.8-7.2-7.2-12.4-14.4-11.6-7.1.7-12.5 7.2-11.6 14.4z"
              />
              <path
                className="sst23"
                d="M774.6 655.7c1 3.5 2.8 6.8 6.6 6.9 3.8.1 6.2-2.8 7-6.4.7-2.7 7.3-22.3 5.2-32.2-.7-3.3-9.7-5.8-10.6-5.8-.9 0-10.1 1.8-11 5-2.8 9.7 2.1 29.9 2.8 32.5z"
              />
              <path
                className="sst22"
                d="M868.8 606.7c.6 14.9-28.8 28.1-65.6 29.6s-67.2-9.3-67.8-24.1c-.3-6.9-1.2-26.1-1-26.1 13.4-.5 46.9-2.7 66.6-3.5 21.6-.9 56.5-11.7 66.6-2.4.2.2.9 20.4 1.2 26.5z"
              />
              <ellipse
                transform="matrix(.9992 -.0409 .0409 .9992 -23.229 33.245)"
                cx={801}
                cy={584.4}
                rx={66.8}
                ry={26.9}
                style={{
                  fill: "#bfbfbf",
                  stroke: "#222",
                  strokeWidth: 2.8803,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10.0012,
                }}
              />
              <path
                className="sst22"
                d="M852.3 580.6c.4 10-22.2 19.4-50.6 20.6-28.4 1.2-51.7-6.4-52.1-16.4-.2-3.7-5.2-36.9-5.1-36.9 11.8-11.3 36.7-11.8 54.5-12.6 17.7-.7 43.4-3.4 55.4 7.6.1.2-2.2 34-2.1 37.7z"
              />
              <path
                className="sst23"
                d="M865.7 542.8c.5 12.9-28.7 24.5-65.3 26s-66.7-7.7-67.2-20.6c-.1-1.8-.6-9-.4-8.9 9.1 8.4 34.3-15.8 65.8-17.1 30.6-1.3 54.2 10.4 66.7 9.9 0-.1.3 8.6.4 10.7z"
              />
              <ellipse
                transform="matrix(.9992 -.0409 .0409 .9992 -21.26 33.127)"
                cx={799.1}
                cy={536.2}
                rx={66.3}
                ry={23.3}
                style={{
                  fill: "#cfcfcf",
                  stroke: "#222",
                  strokeWidth: 2.8803,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10.0012,
                }}
              />
              <path
                className="sst23"
                d="M818.9 626.8c4.6-.4 9.3-1.1 13.8-2.2-.9-3.3 1-6.6-4.6-5.6-7.8.9-10.2-.8-9.2 7.8zM838.8 618.4c4.6-.8 9.1-2.7 13.5-4.3-1.1-3.2.2-6.1-5.3-4.7-7.6 1.9-9.9 2.4-8.2 9z"
              />
              <path
                className="sst23"
                d="M809.2 623.5c4.7-.1 9.3-.7 13.9-1.6-.7-3.4 1.2-6.6-4.4-5.8-7.8.5-10.1-1.3-9.5 7.4zM756.1 622.6s8 2.7 9.6 2.5c.1-1.4.7-5.2.7-5.2l-9.7-1.9-.6 4.6z"
              />
              <path
                className="sst23"
                d="M764.2 620.7s8.9 2.7 10.4 2.5c.1-1.4.8-3.3-.1-4.8-2.7-1.2-9.2-2-9.2-2l-1.1 4.3zM740.5 611.5c.7 1 5.9 3.5 7 3.4.2-1.4.9-3.3.4-4.8-1.7-1.5-4.4-3.6-6-3.1-.9.3-1.6 1.5-1.4 4.5z"
              />
              <ellipse
                transform="matrix(.9992 -.0409 .0409 .9992 -20.846 33.102)"
                cx={798.7}
                cy={526.1}
                rx={66.3}
                ry={23.3}
                style={{
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 2.8803,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10.0012,
                }}
              />
              <path
                className="sst7"
                d="m859.9 533 .4 9.2M859.2 515.4l.4 9.3M850 539.8l.3 8.4M848.8 510.4l.3 8.4M837 543.8l.4 9.3M835.5 506.2l.3 9.3M820.9 547.8l.4 9.2M819.1 503.3l.4 9.2M738.3 538l.4 9.2M737.5 520.1l.4 9.2M748.8 544l.3 8.3M747.5 513.9l.4 8.4M762 546.9l.4 9.2M760.5 509.1l.4 9.2M779.2 549.5l.4 9.2M777.4 505.2l.4 9.2M799.3 549.9l.4 9.3M797.4 502.7l.4 9.3"
              />
              <path
                className="sst24"
                d="M841.2 522.7c.9.8 2.4.8 3.3-.1-.2 2.4 3.1 4.3 5.1 3 1.4 1 1.6 2.7 3.7 2.3.5-.1 1.3-1.1 1.4-1.5 1.5.9 3.7.6 4.6-.9.9-1.5-.3-3.8-2.1-3.7 1.9-.2 3.2-2.3 2.5-4.1-.7-1.7-3.1-2.5-4.7-1.4 1.2-1.3.4-3.7-1.3-4.5-1.7-.7-3.7-.1-5.1 1 .5-1.4-.9-2.8-2.4-2.9s-2.8.7-4 1.7c-.8-.8-1.6-1.7-2.6-2.1s-2.4-.4-3.2.4c-.5.5-.9 1.2-1.5 1.1-.3 0-.5-.3-.8-.5-1-.8-2.7-.8-3.7.1-.1-1.2-1.1-2.3-2.3-2.5s-2.5.4-3.1 1.4c-.6-1.5-2.2-2.6-3.9-2.6-1.7.1-3.2 1.2-3.6 2.8-1.5-1.3-3.5-2.1-5.5-1.7s-3.7 2-3.7 4c-.1 2 1.8 3.9 3.8 3.7 0 2 1.6 3.9 3.5 4.5s4.3-.2 5.4-1.9c.9 1.5 2.8 2.2 4.5 1.9s3.1-1.8 3.3-3.4c.2 1.5 1.7 2.6 3.2 2.5 1.5-.2 2.7-1.6 2.5-3.1-.5 1.1.6 2.5 1.8 2.7 1.3.2 2.4-.5 3.4-1.1.1.8.8 4.2 1.5 4.9z"
              />
              <path
                className="sst23"
                d="m805.1 520-35.2 18-11.2-7.8-1.1-29 45.9-8 11.5 6.5z"
              />
              <path
                className="sst22"
                d="m816.3 527.9-46.2 10.2-1.3-29.9 46.4-8.4z"
              />
              <path
                className="sst22"
                d="M805.5 516.7c.2 5.4-5.9 16-10.8 17-.5.1-10.1-7.2-10.4-12.6s3.5-9.6 8.4-10.7c4.9-1.1 12.8 5.9 12.8 6.3z"
              />
              <ellipse
                transform="rotate(-66.509 799.453 524.674)"
                cx={799.5}
                cy={524.7}
                rx={10.3}
                ry={8.4}
                style={{
                  fill: "#cfcfcf",
                  stroke: "#222",
                  strokeWidth: 2.8798,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 9.9999,
                }}
              />
              <ellipse
                transform="rotate(-66.509 799.85 524.84)"
                className="sst17"
                cx={799.8}
                cy={524.8}
                rx={5.2}
                ry={4.3}
              />
              <ellipse
                transform="rotate(-82.64 793.154 499.06)"
                className="sst17"
                cx={793.2}
                cy={499.1}
                rx={1.2}
                ry={1.7}
              />
              <ellipse
                transform="rotate(-82.64 797.798 498.321)"
                className="sst17"
                cx={797.8}
                cy={498.3}
                rx={1.2}
                ry={1.7}
              />
              <ellipse
                transform="rotate(-82.64 802.196 497.264)"
                className="sst17"
                cx={802.2}
                cy={497.3}
                rx={1.2}
                ry={1.7}
              />
              <path className="sst7" d="m768.9 508.7-11.3-7.5" />
              <path
                className="sst23"
                d="M773.7 503.6c6.1.2 3.8-8.5-1.7-8.1-8.2.4-4.1 7.9 1.7 8.1z"
              />
              <circle
                transform="matrix(.9992 -.0409 .0409 .9992 -20.006 33.584)"
                className="sst21"
                cx={810.9}
                cy={505.8}
                r={1.4}
              />
              <path
                className="sst26"
                d="m772.7 512 .1 1.3c0 .8.8 1.4 1.5 1.2l3.4-.7c.6-.1 1.1-.7 1.1-1.3v-1.2c0-.8-.7-1.4-1.5-1.2l-3.4.6c-.7.1-1.2.6-1.2 1.3z"
              />
              <path className="sst22" d="M844.7 533.9 805 543l-3.6-3.3 39.7-9.1z" />
              <path className="sst5" d="m809.4 576.7-2.9-3.9-2.8 4.6" />
              <path
                className="sst27"
                d="M813.5 576.4c-.3 4.6-.3 9.3 0 13.9-4.1-.6-8.2.4-12.2.7-.7-3.4-1.3-13.5-.2-13.8 1.5-.3 12.4-.6 12.4-.8z"
              />
              <path
                className="sst5"
                d="M804.9 582.2c-.6-3.8 6.5-1.9 2 1.6-.5.4-.3.8-.2 1.5M807.2 587.2c0 .1 0 0 0 0M790.5 578.5l-2.1-4.8-2.1 5"
              />
              <path
                className="sst28"
                d="M785.3 577.7c-3.9-1.6-5.5 3.6-3.7 6.9 1.3 2.8 3.7 4.2 5.7 6.3.9.9 2.2.9 3.2-.1 10.4-11.1 2.7-19.1-1.8-9.5-1 1-1.5-2.9-3.4-3.6z"
              />
              <path
                className="sst5"
                d="M785.7 585s0-.1 0 0M788.6 584.8c0 .1 0-.1 0 0M791.3 584.7c.1.1 0-.1 0 0"
              />
              <path className="sst29" d="m846.7 575.5-6.3 8.8-7.4-7.3 6.8-8.7z" />
              <path
                className="sst5"
                d="m839.8 568.2-.1-2.1M838.5 575c-.3-3.7 6.4-1.4 1.8 1.7-.5.4-.3.7-.3 1.4M840.3 580c0 .1 0 0 0 0M823.7 570.5l.2 3.6"
              />
              <path
                className="sst30"
                d="M830 580.1c.2 3.8-2.3 7.3-5.6 7.5s-6-2.4-6.2-6.3 2.3-7.3 5.6-7.5c3.3-.1 6.1 2.5 6.2 6.3z"
              />
              <path
                className="sst5"
                d="M824.1 577c-.3.8-.3 3.3 0 4.9M824.3 584s.1.1.1.2"
              />
              <path
                className="sst24"
                d="M758.8 587.8c-.7-.9-2.2-1.1-3-.3.5-2.2-2.3-4.4-4.4-3.4-1.2-1.2-1.2-2.8-3.2-2.7-.5 0-1.4.8-1.5 1.3-1.3-1.1-3.4-1-4.4.3s-.2 3.7 1.5 3.8c-1.8 0-3.3 1.9-2.9 3.6.4 1.7 2.6 2.7 4.2 1.9-1.3 1.1-.8 3.5.7 4.4s3.4.6 4.9-.3c-.6 1.2.5 2.8 1.9 3 1.4.3 2.7-.4 3.9-1.1.6.9 1.3 1.8 2.2 2.3s2.2.7 3 0c.5-.4 1-1 1.6-.8.3.1.4.3.6.5.9.9 2.4 1.1 3.5.3 0 1.2.7 2.3 1.8 2.7s2.4-.1 3-1c.4 1.5 1.7 2.8 3.3 2.9 1.5.1 3.1-.8 3.8-2.2 1.2 1.4 3.1 2.4 4.9 2.3s3.7-1.5 4-3.4c.3-1.8-1.1-3.9-3-4 .2-1.9-.9-3.9-2.7-4.7s-4-.3-5.3 1.2c-.7-1.5-2.3-2.5-3.9-2.3-1.6.1-3.1 1.3-3.6 2.8 0-1.4-1.3-2.7-2.7-2.7s-2.7 1.2-2.8 2.7c.7-1-.2-2.4-1.4-2.8-1.1-.3-2.3.2-3.3.7.1-1-.1-4.4-.7-5zM815.8 598.4c-.2 1.5 1.8 2.9 3.2 2.2-1.2 1-.5 3 1.1 3.6 1.5.5 3.3-.3 4.3-1.5 1.1 1 2.9 1.4 4.4 1s2.8-1.6 3.2-3c1.9.6 3.9.7 5.8.1.9-.3 1.9-.7 2.5-1.5.5-.7.6-1.9 0-2.5 1.6-.5 2.4-2.5 1.6-4-.8-1.4-3.1-1.8-4.5-.8-.9-.9-2-1.6-3.3-1.7s-2.7.5-3.1 1.7c-1.3-1-3.1-1.5-4.7-1s-2.9 2-2.5 3.5c-.5-.9-1.9-1.5-3-1.1-1.6.5-1.2 1.8-2.1 2.6-1 .9-2.6.6-2.9 2.4zM853.1 576.6c-.7-.1-1.5 0-2.1.4-.6.5-1 1.3-.5 1.9-1.3-.1-2.5.5-3.1 1.7-.5 1.1-.3 2.6.6 3.4-.9.3-1.4 1.5-1.1 2.4.3.9 1.2 1.6 2.1 2 1 .4 2.4.3 3.1-.6.8 1.1 2.3 1.4 3.5 1 1.2-.5 2.1-1.7 2.3-3 1.1.4 2.4.1 3.1-.8.7-.9.6-2.3-.2-3.2.8-.2 1-1.2 1-2-.1-1.4-.9-2.9-2.2-3.4-1.4-.6-2.8.2-3.5 1.3-.9-.4-1.9-.9-3-1.1z"
              />
              <path
                className="sst140"
                d="M814.2 488c2.2.2 4.4.2 6.6-.2M817.6 483.3v10.5"
              />
              <path
                className="sst141"
                d="M751.7 492.1c2.2.2 4.4.2 6.6-.2M755.2 487.3v10.5M825.7 500.1c2.2.2 4.4.2 6.6-.2M829.2 495.3v10.5"
              />
              <circle
                cx={829.5}
                cy={480.9}
                r={2.7}
                style={{
                  fill: "none",
                  stroke: "#fff57d",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx={837.1}
                cy={487.2}
                r={1.9}
                style={{
                  fill: "#7dd7ff",
                }}
              />
              <circle
                cx={744.2}
                cy={498.5}
                r={1.9}
                style={{
                  fill: "#fff57d",
                }}
              />
              <circle
                cx={748.8}
                cy={508}
                r={2.7}
                style={{
                  fill: "none",
                  stroke: "#7dd7ff",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                className="sst8"
                d="M804.3 540.6c2.1-.1 12.1-2.6 16.4.1 4.3 2.6 5.2 5.8 5.9 10.8 1.1 7.6-.3 15.3-1.1 22.9-.8 7.6-1.1 15.6 2 22.7 2.8 6.4 8.3 11.5 14.9 13.9s15.7 4.3 24.3 1.3l34.9-8.2c-8.5 2.9-17.7 1-24.3-1.3s-12.1-7.5-14.9-13.9c-3.1-7-2.8-15-2-22.7s2.2-15.3 1.1-22.9c-.7-4.9-2.8-10.2-7.3-12.3-1.9-.9-4.2-1.7-6.3-1.5-3.5.1-47.1 11.4-43.6 11.1z"
              />
              <path
                className="sst26"
                d="M890.6 606.3c-.3.2-11.2.4-20.2-3.4-5.2-2.1-9.4-7.6-11.6-14-2.4-7.1-2.3-15.1-1.8-22.7.6-7.6 1.5-15.3.6-22.9-.6-4.9-2.3-10.2-5.7-12.4-1.5-.9-3.2-1.2-4.8-1.1-2.7.2-36.3 10.5-33.6 10.3 1.6-.1 9.3-2.4 12.7.2 3.3 2.6 4 5.9 4.6 10.8.9 7.6-.1 15.3-.6 22.9-.6 7.6-.7 15.6 1.8 22.7 2.2 6.4 6.5 11.6 11.6 14s12.2 4.4 18.7 1.6"
              />
              <path
                className="sst17"
                d="M890.2 607.9c-.8 0-1.5-.6-1.5-1.4-.1-.8.6-1.5 1.4-1.5h.2c.6-.2 1.2 0 1.6.6.5.7.3 1.6-.3 2-.5.2-.9.2-1.4.3zm-.5-2.7zm0 0zM856.3 615.3h-1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h.8c.8 0 1.5.6 1.6 1.4 0 .9-.6 1.5-1.4 1.6zm-6.7-.8h-.4c-.3-.1-.7-.2-1-.3-.8-.2-1.2-1-1-1.8s1-1.2 1.8-1c.3.1.6.2.9.2.8.2 1.3 1 1.1 1.8-.2.7-.7 1.1-1.4 1.1zm-6.3-2.3c-.2 0-.5 0-.7-.1-.3-.2-.6-.3-.9-.5-.7-.4-1-1.3-.6-2s1.3-1 2-.6c.3.1.5.3.8.4.7.4 1 1.2.7 2-.2.5-.7.8-1.3.8zm41.1-4.5h-.2c-.3 0-.6-.1-1-.1-.8-.1-1.4-.8-1.3-1.6.1-.8.8-1.4 1.6-1.3.3 0 .6.1.9.1.8.1 1.4.8 1.3 1.6 0 .7-.6 1.2-1.3 1.3zm-6.6-1h-.4c-.3-.1-.6-.1-1-.2-.8-.2-1.3-1-1.1-1.8s1-1.3 1.8-1.1c.3.1.6.1.9.2.8.2 1.3.9 1.1 1.7-.1.7-.7 1.1-1.3 1.2zm-39.8 1.5c-.4 0-.8-.1-1.1-.4l-.7-.7c-.5-.6-.5-1.5.1-2.1.6-.5 1.5-.5 2.1.1.2.2.4.4.6.7.6.6.6 1.5 0 2.1-.3.2-.7.3-1 .3zm33.3-3.4c-.2 0-.4 0-.6-.1-.3-.1-.6-.2-.9-.4l.5-1.4.6-1.3c.3.1.6.2.8.3.8.3 1.1 1.1.8 1.9-.1.6-.6 1-1.2 1zm-37.3-2c-.5 0-1.1-.3-1.3-.8-.2-.3-.3-.6-.5-.9-.4-.7-.1-1.6.6-2 .7-.4 1.6-.1 2 .6.1.3.3.5.4.8.4.7.1 1.6-.6 2-.2.3-.4.3-.6.3zm31.6-1.5c-.4 0-.8-.1-1-.4l-.7-.7c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l.6.6c.6.5.6 1.5.1 2.1-.3.3-.7.5-1.1.5zm-4.1-5.2c-.5 0-1-.2-1.3-.7-.2-.3-.3-.6-.5-.9-.4-.7-.1-1.6.6-2 .7-.4 1.6-.1 2 .6.1.3.3.5.5.8.4.7.2 1.6-.5 2-.4.1-.6.1-.8.2zm-30 .5c-.7 0-1.3-.4-1.5-1.1-.1-.3-.2-.6-.3-1-.2-.8.3-1.6 1.1-1.8s1.6.3 1.8 1.1c.1.3.2.6.2.9.2.8-.2 1.6-1 1.8-.1.1-.2.1-.3.1zm27.2-6.7c-.6 0-1.2-.4-1.4-1-.1-.3-.2-.6-.3-1-.2-.8.2-1.6 1-1.8s1.6.2 1.8 1l.3.9c.3.8-.2 1.6-.9 1.8-.3.1-.4.1-.5.1zm-28.5.1c-.8 0-1.4-.5-1.5-1.3 0-.3-.1-.7-.1-1-.1-.8.5-1.5 1.3-1.6s1.5.5 1.6 1.3c0 .3.1.6.1.9.1.9-.5 1.6-1.4 1.7.1 0 0 0 0 0zm27-6.6c-.7 0-1.4-.5-1.5-1.3 0-.3-.1-.7-.1-1-.1-.8.5-1.5 1.3-1.6s1.5.5 1.6 1.3c0 .3.1.6.1.9.1.8-.5 1.5-1.4 1.7.1 0 .1 0 0 0zm-27.3-.1c-.9 0-1.5-.7-1.5-1.5v-1c0-.8.7-1.5 1.5-1.4.8 0 1.4.7 1.4 1.5v.9c0 .8-.6 1.5-1.4 1.5zm26.9-6.6c-.1 0-.1 0 0 0-.8 0-1.5-.6-1.5-1.4v-1c0-.8.6-1.4 1.5-1.5.8 0 1.5.7 1.5 1.5v.9c-.1.8-.8 1.5-1.5 1.5zm-26.6-.1h-.2c-.8-.1-1.4-.8-1.4-1.6l.1-.9c.1-.8.7-1.4 1.5-1.4s1.4.7 1.4 1.5v.1l-.1.9c0 .8-.6 1.4-1.3 1.4zm26.7-6.6c-.9 0-1.5-.7-1.5-1.5l.1-1c.1-.8.8-1.4 1.6-1.4.8.1 1.4.7 1.4 1.6l-.1.9c-.1.8-.7 1.3-1.5 1.4zm-26.2-.1h-.2c-.8-.1-1.4-.8-1.3-1.6l.1-1c.1-.8.8-1.4 1.6-1.3.8.1 1.4.8 1.3 1.6l-.1 1c-.1.7-.7 1.3-1.4 1.3zm26.7-6.6h-.2c-.8-.1-1.4-.8-1.3-1.6l.1-1c.1-.8.8-1.4 1.6-1.3.8.1 1.4.8 1.3 1.6l-.1 1c0 .7-.6 1.2-1.4 1.3zm-26.3-.1c-.9 0-1.5-.7-1.5-1.5v-.9c0-.8.7-1.4 1.5-1.4s1.4.7 1.4 1.5v1c0 .7-.6 1.3-1.4 1.3zm26.8-6.6c-.9 0-1.5-.7-1.5-1.5v-.9c0-.8.7-1.4 1.5-1.4s1.4.7 1.4 1.5v1c0 .6-.6 1.2-1.4 1.3zm-26.8-.1c-.8 0-1.5-.6-1.5-1.4 0-.3 0-.6-.1-.9-.1-.8.6-1.5 1.4-1.5.8-.1 1.5.6 1.5 1.4 0 .3 0 .7.1 1 .1.6-.5 1.3-1.4 1.4.1 0 0 0 0 0zm27-6.7c-.1 0-.1 0 0 0-.8 0-1.5-.6-1.5-1.4v-.9c0-.8.6-1.5 1.4-1.5.8 0 1.5.6 1.5 1.4v1c0 .7-.7 1.4-1.4 1.4zm-27.7 0c-.7 0-1.4-.5-1.5-1.2-.1-.3-.1-.6-.2-.9-.2-.8.3-1.6 1.1-1.7.8-.2 1.6.3 1.7 1.1.1.3.1.7.2 1 .1.8-.4 1.6-1.3 1.7.2 0 .1 0 0 0zm27.1-6.6c-.7 0-1.4-.5-1.5-1.2-.1-.3-.1-.6-.2-.9-.2-.8.4-1.6 1.1-1.7.8-.2 1.6.4 1.7 1.1.1.3.1.7.2 1 .1.8-.4 1.5-1.3 1.7.1-.1 0 0 0 0zm-29.5.4c-.4 0-.9-.2-1.2-.5-.2-.2-.3-.4-.5-.6-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0c.3.3.5.5.7.8.5.6.4 1.5-.2 2.1-.3.2-.6.3-.9.3zm-13.4-2c-.7 0-1.4-.5-1.5-1.2-.1-.8.4-1.6 1.2-1.7l.9-.2c.3-.1.7 0 1 .2 0-.6.4-1.2 1-1.4l.9-.3c.8-.3 1.6.2 1.8.9.1.2.5-2 .4-1.8.3-.4.3 1.7.8 1.7h1.1c.8 0 1.4.7 1.4 1.5s-.7 1.4-1.5 1.4h-.9c-.8 0-1.4 0-1.4-.8l-.4.1c-.2.2 0-.4-.3-.3l-.9.3c-.4.1-.8.1-1.2-.1 0 .7-.5 1.3-1.2 1.5l-.9.2h-.3zm40.9-4.9c-.6 0-1.1-.3-1.4-.8-.1-.3-.3-.5-.4-.8-.4-.7-.2-1.6.5-2s1.6-.2 2 .5c.2.3.3.6.5.9.4.7.1 1.6-.7 2-.1.2-.3.2-.5.2zm-25-.7c-.6 0-1.3-.4-1.5-1-.2-.8.2-1.6 1-1.8l.9-.3c.8-.2 1.6.2 1.8 1s-.2 1.6-1 1.8l-.9.3h-.3zm6.5-1.9c-.7 0-1.3-.4-1.5-1-.2-.8.2-1.6 1-1.8l.9-.3c.8-.2 1.6.2 1.8 1s-.2 1.6-1 1.8l-.9.3h-.3zm14-2.1c-.2 0-.4 0-.6-.1-.2-.1-.5-.2-.7-.2-.8-.2-1.2-1-1-1.8s1-1.2 1.8-1c.4.1.7.2 1.1.4.7.3 1.1 1.2.8 1.9-.4.4-.9.8-1.4.8zm-7.5.3c-.7 0-1.3-.4-1.5-1.1-.2-.8.3-1.6 1-1.8l.9-.2c.8-.2 1.6.3 1.8 1 .2.8-.3 1.6-1 1.8l-.9.2c-.1 0-.2.1-.3.1zM861.9 614.1c-.6 0-1.2-.3-1.4-.9-.3-.7.1-1.6.8-1.9.1-.1.3-.1.4-.2.7-.3 1.6 0 1.9.8.3.7 0 1.6-.8 1.9-.2.1-.3.1-.5.2-.1.1-.3.1-.4.1z"
              />
              <defs>
                <path
                  id="SVGID_00000047033184595452945480000014165843727562326160_"
                  d="M816.4 538.5c1.3-.1 9.1-2.4 13.2 1.9 2.6 2.7 3.9 5.6 4.4 10.5.8 7.6-.5 15.5-.9 23.2-.4 7.6-.4 15.6 1.6 22.7 1.8 6.4 6.4 11.6 10.5 14s10.8 5.3 16.1 2.5l29.1-5.8c-5.3 2.8-19.3-2-23.4-4.4-4.1-2.4-8.5-6.7-10.3-13.2-2-7.1-2.6-15.3-2.2-22.9.4-7.6 1.5-15.9.7-23.6-.5-4.9-2.1-8.7-4.9-10.9-1.2-.9-4.4-2.5-5.7-2.4-.8.1-5.2 1.2-10.2 2.7-8.7 2.6-19.4 5.8-18 5.7z"
                />
              </defs>
              <clipPath id="SVGID_00000040559608072774251260000005430488392677369527_">
                <use
                  xlinkHref="#SVGID_00000047033184595452945480000014165843727562326160_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000040559608072774251260000005430488392677369527_)",
                  fill: "#222",
                }}
                d="M816.4 538.5c1.3-.1 9.1-2.4 13.2 1.9 2.6 2.7 3.9 5.6 4.4 10.5.8 7.6-.5 15.5-.9 23.2-.4 7.6-.4 15.6 1.6 22.7 1.8 6.4 6.4 11.6 10.5 14s10.8 5.3 16.1 2.5l29.1-5.8c-5.3 2.8-19.3-2-23.4-4.4-4.1-2.4-8.5-6.7-10.3-13.2-2-7.1-2.6-15.3-2.2-22.9.4-7.6 1.5-15.9.7-23.6-.5-4.9-2.1-8.7-4.9-10.9-1.2-.9-4.4-2.5-5.7-2.4-.8.1-5.2 1.2-10.2 2.7-8.7 2.6-19.4 5.8-18 5.7z"
              />
              <defs>
                <path
                  id="SVGID_00000080176213591419458100000002682548842482146492_"
                  d="M816.4 538.5c1.3-.1 9.1-2.4 13.2 1.9 2.6 2.7 3.9 5.6 4.4 10.5.8 7.6-.5 15.5-.9 23.2-.4 7.6-.4 15.6 1.6 22.7 1.8 6.4 6.4 11.6 10.5 14s10.8 5.3 16.1 2.5l29.1-5.8c-5.3 2.8-19.3-2-23.4-4.4-4.1-2.4-8.5-6.7-10.3-13.2-2-7.1-2.6-15.3-2.2-22.9.4-7.6 1.5-15.9.7-23.6-.5-4.9-2.1-8.7-4.9-10.9-1.2-.9-4.4-2.5-5.7-2.4-.8.1-5.2 1.2-10.2 2.7-8.7 2.6-19.4 5.8-18 5.7z"
                />
              </defs>
              <clipPath id="SVGID_00000037693072511501933770000001119584865583144602_">
                <use
                  xlinkHref="#SVGID_00000080176213591419458100000002682548842482146492_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000037693072511501933770000001119584865583144602_)",
                  fill: "#fff",
                }}
                d="M842.7 561.9c-.1-.4-.2-.6-.2-.8v-.4c.3.1.6.1 1 .1.1.4.3.9.7 1.3.1.1.1.1.2.1s.2 0 .2-.1c.1-.1.1-.1.1-.2s0-.2-.1-.2c-.3-.3-.4-.6-.5-.8.4 0 .7-.1 1.1-.1.2.4.6.7 1.1 1 .1 0 .2.1.2 0 .1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.3-.3-.2-.6-.4-.8-.6.9-.2 1.5-.4 1.7-.5 3 .8 4.6-.2 5.2-.6.2-.2.3-.4.3-.6 0-1.8-1-2.9-1.7-3.4-.4-.3-1.2-.8-1.3-.9.5 0 2.1-.4 2-.9s-1.7-.3-2-.5c.7-.4 1.6-.8 1.5-1.1-.1-.4-1.2-.1-1.9-.5 1.1-.8 1.9-1.7 2.3-2.7.4-1 .4-1.9.3-2.5-.1-.4-.3-.7-.7-.8-1.1-.4-2.3-.3-3.5.2-.7.3-1.2.7-1.4.9-.3-.1-1-.3-1.9-.4.3-.6.9-1 .9-1 .1-.1.2-.2.2-.3v-.2c0-.1-.1-.1-.2-.1h-.2s-.5.3-.8.8c-.2.2-.3.5-.4.7H843c.1-.7.6-1.2.6-1.2.1-.1.1-.1.1-.2s0-.2-.1-.2c-.1-.1-.3-.1-.5 0 0 0-.4.4-.6 1-.1.3-.2.5-.2.8-.2 0-.4.1-.6.1-.1 0-.1 0-.2.1v-.5c0-.5.2-.9.2-.9v-.1c0-.1-.1-.3-.2-.3-.2-.1-.3 0-.4.2 0 0-.2.5-.2 1.1v.8c-2.4.9-4 3.7-3.9 7 .1 3.5 2.1 6.4 4.8 7 0 .2-.1.3-.1.5 0 .3.1.6.2 1 .1.2.3.2.4.2.3-.3.4-.4.4-.6zm4-.3zm0-.1zm-.9-16.7c0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0zm-2.1-.1zm-.1.1zm-.1.1c0 .1 0 .1 0 0 0 .1 0 .1 0 0zm0 .1zm-.1.2zm-.1.1s0 .1 0 0zm-.3.8zm-1.3-1.2zm9 2.3c.2.8-.9 2-1.7 2.5l-1.2-1.7c.6-.8 2.8-1.4 2.9-.8zm-8 5c-.1-.3-.1-.5 0-.8.2-.2-.6 0-.5-.9 0-.1.1-.3.3-.3.1 0 .1-.1 0-.2-1.1-1.4 1.9-1.7 1.6-.2 0 .2.5.1.5.8 0 .5-.5.6-.4.7.5.3.4 1.2-.3 1.1-.1 0-.1 0-.2.1-.1.2-.7.3-1-.3zm0 5.5v-.2l-.3-.3c-.1-.9.7-.8.5-1-.1-.2-.1-.5 0-.8.3-.6.8-.5 1-.2 0 .1.1.1.2 0 .7-.1.9.8.4 1.1-.2.1.4.2.4.7 0 .7-.5.6-.5.8.3 1.5-2.7 1.3-1.7-.1zm6 .6 1.1-1.7c.8.2 1.6 1.3 1.5 2 0 .5-2.2.2-2.6-.3zm-6.1 3.6z"
              />
              <defs>
                <path
                  id="SVGID_00000123402805427609723030000016062042228888528535_"
                  d="M816.4 538.5c1.3-.1 9.1-2.4 13.2 1.9 2.6 2.7 3.9 5.6 4.4 10.5.8 7.6-.5 15.5-.9 23.2-.4 7.6-.4 15.6 1.6 22.7 1.8 6.4 6.4 11.6 10.5 14s10.8 5.3 16.1 2.5l29.1-5.8c-5.3 2.8-19.3-2-23.4-4.4-4.1-2.4-8.5-6.7-10.3-13.2-2-7.1-2.6-15.3-2.2-22.9.4-7.6 1.5-15.9.7-23.6-.5-4.9-2.1-8.7-4.9-10.9-1.2-.9-4.4-2.5-5.7-2.4-.8.1-5.2 1.2-10.2 2.7-8.7 2.6-19.4 5.8-18 5.7z"
                />
              </defs>
              <clipPath id="SVGID_00000174579703201095868120000009341753425984497554_">
                <use
                  xlinkHref="#SVGID_00000123402805427609723030000016062042228888528535_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000174579703201095868120000009341753425984497554_)",
                  fill: "#fff",
                }}
                d="M843.7 595.5c-.1-.3-.2-.6-.3-.8v-.4h1c.1.4.4.8.9 1.2.1 0 .2.1.2.1.1 0 .2-.1.2-.1.1-.1.1-.2.1-.2l-.1-.2c-.3-.2-.5-.5-.6-.7.4-.1.7-.2 1-.3.3.3.7.6 1.3.9h.2c.1 0 .1-.1.2-.2v-.2c0-.1-.1-.2-.2-.2-.4-.1-.6-.3-.8-.5.8-.3 1.4-.6 1.6-.7 3 .4 4.5-.8 5-1.3.2-.2.3-.4.2-.7-.2-1.8-1.4-2.7-2.1-3.1-.5-.3-1.2-.6-1.4-.7.5-.1 2-.7 1.9-1.1-.1-.5-1.7 0-2.1-.3.6-.5 1.5-1 1.4-1.3-.2-.4-1.2 0-1.9-.2 1-.9 1.7-1.9 2-3s.1-1.9 0-2.5c-.1-.4-.4-.6-.8-.7-1.1-.2-2.3 0-3.5.7-.7.4-1.1.9-1.3 1-.3 0-1-.1-1.9-.1.2-.7.7-1.1.7-1.1.1-.1.1-.2.1-.3s0-.1-.1-.1c-.1-.1-.1-.1-.2-.1s-.2 0-.2.1c0 0-.4.3-.7.9-.1.2-.2.5-.3.8-.4 0-.7.1-1.1.2 0-.7.4-1.3.4-1.3 0-.1.1-.1.1-.2s-.1-.2-.1-.2c-.1-.1-.3-.1-.4.1 0 0-.3.4-.4 1.1-.1.3-.1.5-.1.8-.2.1-.4.1-.6.2-.1 0-.1.1-.2.1 0-.1 0-.2-.1-.3V579.4c0-.1-.1-.2-.3-.3-.2 0-.3.1-.4.3 0 0-.1.5 0 1.1v.3c0 .2.1.3.1.4-2.2 1.2-3.5 4.2-3 7.4.5 3.4 3 6 5.7 6.2v.5c.1.3.2.6.4.9.1.1.3.2.4.1.1-.5.1-.6.1-.8zm3.9-.9c.1 0 .1 0 0 0 .1 0 .1 0 0 0zm.1-.1zm-3.2-16.2s0 .1 0 0c0 .1 0 .1 0 0 0 .1 0 0 0 0zm-2.1.2zm-.1.1zm0 .1c0 .1 0 .1 0 0 0 .1 0 .1 0 0zm-.1.1s0 .1 0 0c0 .1 0 0 0 0zm0 .2c-.1 0-.1.1 0 0-.1.1-.1 0 0 0zm-.1.1c0 .1 0 0 0 0zm-.2.9zm-1.4-1.1zm9.2 1c.4.8-.6 2.1-1.4 2.7l-1.5-1.5c.6-.8 2.7-1.7 2.9-1.2zm-7.2 6.1s-.1 0 0 0c-.2-.2-.2-.5-.1-.8.1-.2-.6 0-.6-.8 0-.1.1-.3.2-.4.1 0 .1-.1 0-.2-1.2-1.2 1.7-1.9 1.5-.4 0 .2.5 0 .6.7.1.5-.5.7-.3.8.5.2.5 1.1-.2 1.1-.1 0-.1 0-.2.1-.1.2-.6.4-.9-.1zm.7 5.4c0-.1 0-.1-.1-.2-.1 0-.3-.2-.3-.3-.2-.9.5-.9.3-1-.2-.2-.2-.5-.1-.7.2-.6.7-.6.9-.3 0 .1.1 0 .2 0 .7-.2 1 .6.5 1-.1.1.4.1.5.7.1.7-.4.7-.4.8.7 1.3-2.3 1.5-1.5 0zm5.9-.2.8-1.8c.8.1 1.7 1 1.8 1.7.1.5-2 .4-2.6.1zm-5.5 4.3z"
              />
              <defs>
                <path
                  id="SVGID_00000120552211371358309270000001197787663690647477_"
                  d="M816.4 538.5c1.3-.1 9.1-2.4 13.2 1.9 2.6 2.7 3.9 5.6 4.4 10.5.8 7.6-.5 15.5-.9 23.2-.4 7.6-.4 15.6 1.6 22.7 1.8 6.4 6.4 11.6 10.5 14s10.8 5.3 16.1 2.5l29.1-5.8c-5.3 2.8-19.3-2-23.4-4.4-4.1-2.4-8.5-6.7-10.3-13.2-2-7.1-2.6-15.3-2.2-22.9.4-7.6 1.5-15.9.7-23.6-.5-4.9-2.1-8.7-4.9-10.9-1.2-.9-4.4-2.5-5.7-2.4-.8.1-5.2 1.2-10.2 2.7-8.7 2.6-19.4 5.8-18 5.7z"
                />
              </defs>
              <clipPath id="SVGID_00000156551716953043482900000000549129492257112226_">
                <use
                  xlinkHref="#SVGID_00000120552211371358309270000001197787663690647477_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000156551716953043482900000000549129492257112226_)",
                  fill: "#fff",
                }}
                d="M864.2 610.7c-.4 0-.6-.1-.8-.1-.1 0-.2-.1-.3-.1.3 0 .5-.1.8-.1.4.1.9.2 1.5.2h.2c.1 0 .1 0 .1-.1l-.1-.1h-.2c-.4 0-.7-.1-1-.1.2-.1.4-.2.6-.2.4 0 1 .1 1.6 0h.2v-.1h-1.4c.4-.2.7-.4.7-.5 2.6-.4 2.9-.9 3-1.1 0-.1-.1-.2-.3-.2-1.4-.4-2.9-.5-3.8-.5h-1.6c.3-.1 1.1-.5.7-.6-.4-.1-1.4.3-1.8.3.1-.2.5-.5.2-.6-.4-.1-.9.2-1.6.2.1-.4-.1-.8-.6-1.1s-1.2-.5-1.7-.7c-.3-.1-.8-.1-1.1-.1-1 .1-1.8.4-2.2.7-.2.2-.3.4-.3.5-.2 0-.9.1-1.5.3-.3-.2-.2-.4-.2-.4s0-.1-.1-.1h-.4c-.1 0-.1 0-.1.1 0 0-.1.2.1.4.1.1.2.2.3.2-.3.1-.5.1-.7.2-.5-.2-.6-.4-.6-.4s-.1 0-.1-.1h-.3c-.2 0-.3 0-.3.1 0 0 .1.2.4.4.1.1.3.2.5.2-.1 0-.2.1-.3.1 0 0-.1 0-.1.1-.1 0-.1 0-.2-.1-.1 0-.1 0-.2-.1-.4-.1-.6-.3-.6-.3h-.5c-.2 0-.2.1-.1.1 0 0 .3.1.7.3.1 0 .1 0 .2.1.1 0 .3.1.4.1-.8.7.2 1.7 2.8 2.5 2.8.8 6.4 1.1 8.6.8.1 0 .2.1.4.1.3.1.6.1.9.2h.4c0-.4 0-.4-.2-.4zm2.5-.9s-.1 0 0 0c-.1 0 0 0 0 0zm-.1 0zm-13.6-3.9zm-1.6.3zm.1.1zm0 0c.1 0 .1 0 0 0 .1 0 .1 0 0 0zm.1.1zm0 0s.1 0 0 0c.1 0 0 0 0 0zm.1.1zm.4.2zm-1.8 0zm7.8-1.2c.8.1 1 .7.8 1l-2.2-.2c-.2-.4.9-.9 1.4-.8zm-1.4 2.8c-.3 0-.5-.1-.6-.2 0-.1-.4.1-1.1-.1-.1 0-.1-.1-.1-.1l-.1-.1c-1.8-.1 0-.8.9-.4.1 0 .4-.1.9.1.4.1.1.3.3.3.5 0 1.2.2.6.3h-.1c.2.1-.1.2-.7.2zm4.3 1.3h-.7c-.8-.2-.2-.3-.4-.3-.3 0-.5-.1-.6-.2-.2-.2.1-.3.5-.2h.1c.4-.2 1.2 0 1.1.2 0 .1.4 0 .8.1.5.2.1.3.3.3 1.5.1-.7.7-1.1.1zm4.4-1-.6-.6c.7-.1 2.1 0 2.6.2.4.1-1.3.4-2 .4zm-1.2 2.1z"
              />
            </g>
            <g id="building_x5F_on"  onMouseLeave={()=>setActiveBuilding(false)} style={{display: isActiveBuilding? "block" : "none"}}>
              <path
                className="sst31"
                d="M625.9 508.6s-.2 136.5-44.8 245l47.8 50 49.5-12.3 22-60.5 72.2 55.7.3-3.5 1.5-16.4 17.2-4.2S748 642.1 741.9 515.1l-116-6.5z"
              />
              <path
                className="sst26"
                d="m745.7 573.2-89 60.3 3.7-30 82-57.7zM769.5 694.7 632.9 787l2.6-16 131-88.1zM749 597.1l-98.8 67 2.5-16 94.3-63.2zM759 650.8l-116.7 79.5 1.6-10.2 113.6-76.2z"
              />
              <path
                className="sst31"
                d="m625.7 508.2 41.9 21.6 74-15.1-47.8-17.7z"
              />
              <path className="sst7" d="M628.6 803.2c37.5-216.3 39-273.4 39-273.4" />
              <defs>
                <path
                  id="SVGID_00000088840171717576867460000015726823874317664139_"
                  d="M625.7 508.2s-.2 136.5-44.8 245l47.8 50 49.5-12.3 22-60.5 72.2 55.7.3-3.5 1.5-16.4 17.2-4.2s-43.6-120.3-49.7-247.3l-116-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000084517092732518045220000015170228034820279708_">
                <use
                  xlinkHref="#SVGID_00000088840171717576867460000015726823874317664139_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <g
                style={{
                  clipPath:
                    "url(#SVGID_00000084517092732518045220000015170228034820279708_)",
                }}
              >
                <path
                  className="sst7"
                  d="m742.7 525.9-75.2 16.5-42.3-23.5M747.3 548.6l-83.2 18.1-42.8-25.5"
                />
                <path className="sst7" d="M751.8 571.2 660.6 591l-43.2-27.4" />
                <path className="sst7" d="m756.3 593.9-99.2 21.5-43.7-29.5" />
                <path className="sst7" d="m760.8 616.5-107.2 23.2-44.1-31.5" />
                <path className="sst7" d="M765.3 639.2 650.1 664l-44.6-33.5" />
                <path className="sst7" d="m769.9 661.8-123.3 26.5-45-35.5" />
                <path className="sst7" d="m774.4 684.5-131.2 28.2-45.5-37.5" />
                <path className="sst7" d="M778.9 707.2 639.7 737l-46-39.5" />
                <path className="sst7" d="m783.4 729.8-147.2 31.5-46.4-41.5" />
                <path className="sst7" d="m787.9 752.4-155.2 33.3-46.9-43.6" />
              </g>
              <path
                className="sst33"
                d="M738.1 727.8c-25.9.7-49.9 28-53.8 64.3-.7 6.4-.9 18.5-.9 18.5L666.8 793c.2-.1.2-12 .9-18.5 3.8-36.3 27.9-59.8 53.7-60.7 6.2-.2 13.8 1 18.9 4.2 8.3 5.2 17.5 15.7 20.2 18.8 2 2.4-7.8-9.4-22.4-9z"
              />
              <path
                className="sst151"
                d="M709.3 760.8c1.9-.4 4 .2 5.5 1.4 3 2.5 3.3 6.9 3.4 10.8.6-2.3 3-3.8 5.4-4.1 4.5-.6 9.3 2.3 10.8 6.6.3-3.6 2.7-6.9 6-8.2s7.4-.6 10 1.8c-.4-1.2.3-2.6 1.3-3.4 1-.8 2.3-1.2 3.6-1.4 2.4-.5 5-.8 7.2.4.1-1.6.9-3 2.2-4M725.9 743.1c.8-.2 1.7.1 2.3.6 1.3 1 1.4 2.9 1.4 4.5.3-1 1.3-1.6 2.3-1.7 1.9-.3 3.9 1 4.5 2.8.1-1.5 1.1-2.9 2.5-3.5s3.1-.3 4.2.8c-.2-.5.1-1.1.5-1.4s1-.5 1.5-.6c1-.2 2.1-.3 3 .2 0-.7.4-1.3.9-1.7"
              />
              <path
                className="sst151"
                d="M715 751.5c1.6-.3 3.2.1 4.4 1.1 2.4 2 2.6 5.5 2.7 8.7.5-1.9 2.4-3 4.4-3.3 3.6-.5 7.5 1.9 8.7 5.3.2-2.9 2.2-5.5 4.8-6.6 2.7-1.1 5.9-.5 8.1 1.4-.3-1 .2-2.1 1-2.7.8-.6 1.9-.9 2.9-1.1 1.9-.4 4-.6 5.8.4.1-1.2.7-2.4 1.7-3.2"
              />
              <path
                className="sst151"
                d="m718.2 773 4.1-12.6 13-21.8M734.4 775.6l.7-13.3 2.5-23.4M750.5 769.2l-2.4-11-7.6-19.6M762.5 764.8l-4.7-10.1-9.6-9.9-7.3-7.5"
              />
              <path
                className="sst33"
                d="M739.4 738.6c18.4.5 31.8 21.2 33 48.4l6.2-1.7c0-31.8-16.9-56.7-40.5-57.4-25.9-.7-49.9 28-53.8 64.3-.7 6.4-.9 18.5-.9 18.5l11-2.9c.1-3.4.3-7.4.6-10.3 3.3-33.2 23.2-59.5 44.4-58.9z"
              />
              <path
                className="sst34"
                d="M669.5 522.7h0c-2.7-.5-4.6-3.1-4.1-5.8l1.9-11.2c.5-2.7 3.1-4.6 5.8-4.1h0c2.7.5 4.6 3.1 4.1 5.8l-1.9 11.2c-.5 2.8-3.1 4.6-5.8 4.1zM641.8 511.1h0c-1.9-.3-3.2-2.1-2.8-4l1.9-10.9c.3-1.9 2.1-3.2 4-2.8h0c1.9.3 3.2 2.1 2.8 4l-1.9 10.9c-.3 1.8-2.1 3-4 2.8zM724.4 514.1h0c2.1-.9 3.1-3.2 2.3-5.3l-3.7-9.1c-.9-2.1-3.2-3.1-5.3-2.3h0c-2.1.9-3.1 3.2-2.3 5.3l3.7 9.1c.8 2.1 3.2 3.1 5.3 2.3z"
              />
              <path
                className="sst34"
                d="M733.2 496.1c-.2 8.3-23.5 15.7-51.9 14.9-28.4-.8-51.2-9.5-51-17.9.1-4.9 13-46.3 13.2-46.4 8.1-7.6 27.9 5.9 39.5 6.2 14.7.4 29-12.1 39.7-3.9.6.5 10.6 43.1 10.5 47.1z"
              />
              <ellipse
                transform="rotate(-88.341 683.122 449.026) scale(1.00002)"
                cx={683.1}
                cy={449}
                rx={11.8}
                ry={39.9}
                style={{
                  fill: "#7865ff",
                  stroke: "#222",
                  strokeWidth: 2.8803,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10.0006,
                }}
              />
              <path
                className="sst36"
                d="M724.6 485.7c-1.3 0-2.5-.6-3.4-1.4-.7-.8-1.1-1.9-1.1-2.9 0-1.7 1.2-2.8 2.9-2.8.7 0 1.5.3 2.3.7.3.2.6.3.9.3.6 0 1.3-.3 1.6-.9.2-.3.2-.5.3-.7h-.2c-.4 0-1 0-1.6.1-.7.1-1.5.1-2.2.1-.6 0-2.4-.1-3.4-1.4-.7-.9-.9-2.2-.7-3.8.5-2.5 2-4.7 4.1-6 1.5-.9 3-1.4 4.4-1.3 2.7.1 4.4 1.9 4.5 3.5.1 1.2-.6 2.4-2.4 2.7h-.6c-.5 0-1-.1-1.5-.4-.1-.1-.3-.1-.4-.1-1.1 0-2.2.8-2.5 1.2.3 0 .7-.1 1.1-.2.9-.2 1.9-.3 2.9-.3 3 .1 4 2 4.3 3.6v.2l.1 1.4v.2c-.4 3.9-4.2 7.7-8.1 8-.6.1-.9.2-1.3.2z"
              />
              <path
                className="sst17"
                d="M728.4 467c3 .1 4.1 3 2 3.4h-.3c-.3 0-.7-.1-1-.3-.3-.1-.6-.2-1-.2-2.2-.1-5 2.1-3.9 3.5.3.3.7.5 1.1.6h.2c1.2-.2 2.7-.5 4-.5 1.4 0 2.5.6 2.9 2.5 0 .4.1 1 .1 1.4-.3 3.4-3.6 6.5-6.8 6.7h-.8c-3.6-.1-4-4.3-1.7-4.3.4 0 1 .2 1.6.6.5.3 1 .5 1.6.5 1.1 0 2.2-.5 2.9-1.5 1-2.3.2-2.8-1.2-2.9-1.1 0-2.6.2-3.8.2-1.8-.1-3.2-.7-2.7-3.5.4-2.1 1.7-4 3.5-5 1-.9 2.2-1.2 3.3-1.2m0-2.8c-1.7-.1-3.5.5-5.2 1.5-2.5 1.5-4.2 4.1-4.8 7-.4 2.1-.1 3.7.9 5l.6.6c-.7.7-1.3 1.8-1.3 3 0 1.4.5 2.8 1.5 3.9 1.1 1.2 2.7 1.9 4.4 1.9.4 0 .8 0 1.2-.1 4.6-.4 8.9-4.6 9.4-9.3v-2.2c-.3-1.4-.9-2.6-1.9-3.5.8-.7 1.2-1.8 1.1-3-.1-2.6-2.7-4.8-5.9-4.8z"
              />
              <path
                className="sst21"
                d="M639.1 484.1c-1.8-.1-3.7-1.1-5.2-2.8-2-2.3-3.1-5.5-2.7-8.5 0-.2.1-.9.1-1 .1-1.6.5-3.1 1.1-4.4 1.5-3.2 3.6-3.8 5.2-3.8 3.5.1 6.5 3.8 7 6.2.3 1.4-.2 2.5-1.3 3.1-.3.1-.7.2-1.1.2-.8 0-1.5-.4-2-1.1-1.1-1.6-1.9-2-2.2-2-.4 0-1.1 1.3-1.2 3.3 0 1.2.2 2.3.6 3.1.5.9 1.1 1.1 1.5 1.1s.9-.1 1.5-.3c.3-.1.7-.2 1.1-.2.2 0 .4 0 .5.1.9.3 1.5.9 1.9 1.9.3.7.2 1.6-.2 2.3-1 1.8-2.7 2.8-4.6 2.8z"
              />
              <path
                className="sst17"
                d="M637.4 465.1c3.5.1 7 5.6 5.1 6.5-.1 0-.2.1-.4.1-.3 0-.6-.2-.8-.5-1.2-1.9-2.4-2.6-3.3-2.6-3.5-.1-4 10.3.8 10.4.6 0 1.3-.1 2.1-.5.1 0 .3-.1.4-.1h.2c.4.1.8.5.9 1 .1.3.1.8-.1 1.1-.8 1.5-2 2.2-3.3 2.1-3.3-.1-7.1-4.6-6.6-9.7 0-.2.1-1 .1-1 .1-1.3.4-2.7 1-3.9 1.2-2.1 2.5-2.9 3.9-2.9m.1-2.9c-1.6 0-4.5.5-6.5 4.6-.7 1.5-1.1 3.1-1.2 4.9 0 .3-.1.8-.1.9-.3 3.4.8 7 3.1 9.5 1.8 2 4.1 3.2 6.2 3.3 2.4.1 4.6-1.3 5.9-3.6.6-1.1.7-2.3.2-3.5-.5-1.4-1.5-2.3-2.9-2.7-.3-.1-.6-.1-.9-.1-.6 0-1.1.1-1.7.3-.5.2-.7.2-.8.2 0 0-.4-.4-.6-1.5-.2-.9-.1-1.8.1-2.4.1.2.3.4.6.7.7 1.1 1.9 1.7 3.1 1.8.6 0 1.2-.1 1.7-.4 1.7-.8 2.5-2.6 2.1-4.7-.6-2.9-4.1-7.1-8.3-7.3z"
              />
              <path
                className="sst36"
                d="M696.5 493.4c-.6 0-1.3-.2-1.9-.7-.1-.1-.3-.2-.4-.4-.8-1.4-.4-2.5 0-3.4.1-.3.2-.6.4-.9 3.8-11.4 5.3-14.6 7.8-14.6 2.1.1 3.2 2.6 5.3 7.6.8 1.8 1.6 3.9 2.7 6.2.6 1.3.3 2.9-.6 3.9-.7.7-1.4.8-1.8.8-1.5 0-2.5-1.5-3.2-2.6v-.1c-1.2.2-2.1.2-2.7.3-.8.1-1.3.1-1.4.2-.3.2-.8 1.1-1.5 2.4l-.2.3c-.1.2-.3.4-.4.5-.8.3-1.5.5-2.1.5z"
              />
              <path
                className="sst17"
                d="M702.3 474.8c1.7.1 3.2 5.4 6.7 13 .4.7.2 1.6-.4 2.2-.2.3-.5.4-.8.4-1 0-1.9-1.8-2.7-2.8-6.1 1-5.1-.7-7.7 4-.3.2-.6.3-1 .3-.3 0-.7-.2-1.1-.4-.6-1 0-1.6.5-3.1 3.4-9.7 5.1-13.6 6.5-13.6m-2.1 10.4c1.4-.2 2.7-.4 4-.6-.7-1.5-1.4-2.8-2.1-4.3-.6 1.7-1.3 3.3-1.9 4.9m2.2-13.3c-3-.1-4.5 3.1-5.2 4.8-1 2.1-2.2 5.3-4 10.7v.1c-.1.3-.2.6-.3.8-.4 1-1 2.7.2 4.6.2.3.5.6.8.9.8.6 1.8.9 2.7.9s1.9-.3 2.7-.8c.3-.3.6-.6.8-1l.2-.3c.4-.7.8-1.4 1-1.8h.7c.5 0 1.2-.1 1.9-.2.8 1.2 2.1 2.6 4 2.6 1.1 0 2.1-.4 2.9-1.2 1.4-1.4 1.8-3.6.9-5.5-1-2.3-1.9-4.3-2.7-6.2-.9-2.2-1.6-3.9-2.3-5.2-.6-.7-1.8-3.1-4.3-3.2z"
              />
              <path
                className="sst21"
                d="M687.5 493.8c-2.2-.1-4.1-1-5.6-2.7-1.6-1.8-2.4-4.4-2.1-7 1.1-9 6.2-9.8 8.3-9.7 2.9.1 5.9 1.9 6.7 4 .4 1.1.1 2.2-.7 3-.6.5-1.3.8-2.1.8-.7 0-1.4-.3-2-.8-.7-.5-1.2-.9-1.7-.9-.1 0-.5 0-1 .5-.8.9-1.3 2.8-1.1 4.5v.1c.1 1.2.9 2.2 2 2.2h.3c.5 0 .7-.2 1.2-.6.3-.2.7-.6 1.3-.8.5-.2 1-.4 1.5-.3 1.3.1 2.2.8 2.5 2 .3 1.6-.9 3.7-2.7 4.6-1.7.8-3.3 1.1-4.8 1.1z"
              />
              <path
                className="sst17"
                d="M688.1 475.9c3.5.1 6.6 3 5 4.4-.3.3-.7.4-1.1.4-.4 0-.8-.2-1.1-.4-1-.8-1.8-1.2-2.6-1.2-2.5-.1-4 3.5-3.6 6.6.1 2 1.6 3.6 3.4 3.6h.5c1.3-.2 1.8-1 3-1.5.2-.1.5-.2.8-.2 2 .1 1.3 2.9-.8 3.9-1.4.8-2.7 1.1-3.9 1-3.9-.1-6.8-3.7-6.3-8.1.6-6.7 3.8-8.6 6.7-8.5m.1-2.9c-2-.1-8.6.6-9.8 11-.3 3 .6 6 2.5 8.1 1.7 1.9 4 3 6.6 3.1 1.8.1 3.6-.4 5.4-1.4 2.4-1.3 4-3.9 3.4-6.2-.4-1.8-1.9-3-3.8-3.1h-.1c-.7 0-1.5.1-2.2.5-.7.3-1.2.7-1.5 1-.1.1-.3.3-.4.3h-.1c-.2 0-.6-.4-.6-.9v-.1c-.1-1.5.4-3 .8-3.4.1.1.4.2.8.5.8.7 1.8 1.1 2.9 1.1 1.2 0 2.2-.4 3.1-1.1 1.3-1.1 1.7-2.9 1.1-4.5-1.1-2.7-4.6-4.8-8.1-4.9z"
              />
              <path
                className="sst21"
                d="M714.6 490.5c-1.1 0-2.1-.8-2.4-1.9-.7-2.3-.8-4.8-.8-7.2-.1-1.2-.1-2.3-.2-3.4-.8.1-1.6.2-2.5.2-1.2 0-2-.4-2.5-1.1-.2-.3-.5-1.1 0-2.2.4-.8 1.1-1.5 2-1.9 1.7-.7 3.7-1.2 5.7-1.8.4-.1.8-.2 1.3-.3.8-.2 1.5-.3 2.2-.3 2.2.1 3.2 1.2 3.2 2.4 0 .8-.3 2.5-3.7 3.3.1.9.2 2.1.4 3.2.7 5 1.3 9.8-1.7 10.7-.5.3-.7.3-1 .3z"
              />
              <path
                className="sst17"
                d="M717.2 472.2c2.6.1 2.8 2.4-1.9 3.1-.3 3 2.4 12.9-.3 13.7h-.3c-.5 0-.9-.4-1.1-.9-1.1-3.6-.5-8-1.2-11.9-.7.2-2.4.6-3.6.6-1 0-1.7-.3-1.2-1.2.3-.5.7-.9 1.2-1.1 2-.9 4.5-1.4 6.7-2 .6-.3 1.2-.3 1.7-.3m.1-2.9c-.8 0-1.7.1-2.7.3-.4.1-.8.2-1.3.3-2 .5-4.1 1-5.9 1.8-1.2.5-2.2 1.4-2.7 2.6-.6 1.2-.5 2.5.1 3.5.5.8 1.5 1.7 3.6 1.8.4 0 .8 0 1.2-.1 0 .6.1 1.2.1 1.8.1 2.5.2 5.1.9 7.6.5 1.7 2 2.9 3.8 2.9.4 0 .9 0 1.3-.2 2.1-.7 3.2-2.7 3.2-6.1 0-1.9-.3-4.2-.5-6.2-.1-.6-.2-1.4-.2-2 .5-.2 1-.5 1.5-.7 2.2-1.3 2.3-3.1 2.2-3.8-.1-2.3-2.4-3.4-4.6-3.5z"
              />
              <path
                className="sst36"
                d="M646 486.9c-.8 0-1.5-.3-2-.9-.5-.5-.8-1.2-.8-2 0-.1 0-.2.1-.4.2-.9.2-2.6.2-4.3.2-5.5.4-9.2 1.9-10.7.5-.5 1.1-.7 1.7-.7.3 0 .6.1.9.2.8.3 1.4 1 1.6 1.8 1.1 3.2.2 11.4-.7 14.8-.4 1.4-1.6 2.3-2.9 2.2z"
              />
              <path
                className="sst17"
                d="M647 469.4c.1 0 .3.1.4.1.4.2.7.5.8.9.9 2.7.1 10.5-.7 14-.2.8-.8 1.1-1.5 1.1s-1.4-.5-1.4-1.4v-.2c.6-3.4-.3-14.5 2.4-14.5m.1-2.9c-1 0-2 .3-2.7 1.1-2 1.9-2.2 5.7-2.4 11.6 0 1.6-.1 3.3-.2 4.1 0 .2-.1.4-.1.6 0 1.2.4 2.2 1.1 3.1.8.8 1.9 1.3 3 1.3 2.1.1 3.9-1.3 4.4-3.3.9-3.4 1.9-12 .7-15.6-.4-1.2-1.3-2.2-2.5-2.7-.4 0-.8-.1-1.3-.2z"
              />
              <path
                className="sst21"
                d="M656.1 491.3c-.6 0-1.2-.3-1.8-.7-.7-.5-1-1.3-1.1-2.1-.2-2.5.1-4.9.3-7.2.1-1.2.3-2.4.3-3.7 0-.1 0-.2-.1-.2-2.7-.7-4.2-1.8-4.5-3.1-.2-.7 0-1.5.6-2.1.5-.6 1.4-.9 2.2-.8.1 0 .3 0 .4.1h.2c3.3.5 6.9 1.1 10.1 2.5.9.4 1.7 1.2 1.9 2.1.3 1-.1 1.6-.3 2-.8 1-2.2.9-2.7.9-.6 0-1.2-.1-2.1-.3 0 .7 0 1.6-.1 2.5-.1 2-.1 4.3-.4 6.1-.1.8-.6 4-2.9 4z"
              />
              <path
                className="sst17"
                d="M651.9 472.7h.2c3.2.5 6.8 1.1 10 2.4.5.2.9.7 1.1 1.2.2.9-.6 1.1-1.6 1.1-.8 0-1.7-.2-2.4-.4h-.1c-.4 0-.8.3-.9.8-.3 3.4.1 12.2-2.1 12.1-.2 0-.6-.2-.9-.4-.3-.3-.6-.7-.6-1.1-.3-3.5.4-7.1.6-10.7 0-.8-.4-1.5-1.2-1.7-1.8-.5-4.4-1.6-3.3-2.8.4-.4.8-.5 1.2-.5m.1-2.9c-1.2 0-2.5.5-3.3 1.3-.9 1-1.3 2.2-1 3.5.4 1.6 1.9 2.9 4.5 3.8-.1.9-.1 1.7-.3 2.7-.3 2.4-.5 4.9-.3 7.5.1 1.2.7 2.4 1.6 3.1.8.7 1.7 1.1 2.7 1.1.7 0 2.6-.2 3.7-2.4.4-.8.6-1.7.8-3 .3-1.9.4-4.2.4-6.3v-.9h.7c1.7.1 3-.4 3.8-1.5.7-.9.9-2 .6-3.2-.4-1.4-1.4-2.5-2.8-3.1-3.4-1.4-7.1-2-10.4-2.5l-.2-.1h-.5z"
              />
              <path
                className="sst36"
                d="M670.1 493.6c-.7 0-1.3-.3-1.8-.7-1.6-1.4-1.3-3.5-1-5.3.2-1.3.4-2.6-.1-3.3 0 0-.1-.1-.1-.2-.5-.9-1-1.7-1.5-2.4-.7-1.1-1.5-2.3-2.1-3.8-.4-.9-.3-1.9.1-2.7.5-.8 1.2-1.3 2.1-1.2 1.7 0 3.1 1.8 4.9 4.7l.1.1h.1c2.1-2.6 3.5-3.6 4.9-3.6.5 0 1.8.2 2.3 2 .2.8.1 1.6-.3 2.4-.7 1.1-1.5 2.2-2.3 3.1-.7.9-1.4 1.7-2 2.6-.1.6-.1 1.4 0 2.3.1 2.4.2 5.7-2.5 6.1-.5-.2-.6-.1-.8-.1z"
              />
              <path
                className="sst17"
                d="M665.5 475.2c1.1 0 2.6 2.2 3.7 4 .3.5.8.7 1.3.8s.9-.2 1.3-.6c1.1-1.5 2.7-3.1 3.7-3.1.4 0 .8.3 1 1 .1.4.1.9-.2 1.2-1.2 2-3 3.6-4.3 5.7-.1.2-.2.4-.2.6-.4 2.2.8 6.8-1.4 7.2h-.2c-.3 0-.7-.2-.9-.4-2-1.7.8-6.1-1-8.4-1.2-2.3-2.6-3.7-3.6-6.1-.2-.4-.2-1 .1-1.4.1-.3.4-.5.7-.5m0-2.8c-1.4 0-2.6.7-3.4 2-.7 1.2-.8 2.7-.2 4 .7 1.6 1.5 2.8 2.3 4 .5.8 1 1.5 1.5 2.3 0 .1.1.2.2.3.1.3 0 1.6-.1 2.3-.2 1.9-.7 4.7 1.5 6.6.7.6 1.7 1 2.7 1 .2 0 .5 0 .8-.1.9-.2 3-.8 3.6-3.9.2-1.1.2-2.4.1-3.6 0-.6-.1-1.3 0-1.7.5-.8 1.1-1.5 1.7-2.3.8-1 1.7-2.1 2.5-3.3.7-1.1.8-2.3.4-3.5-.8-2.8-3-3.1-3.7-3.1-1.6 0-3 .8-4.9 2.7-1.5-2.2-3-3.7-5-3.7z"
              />
              <path
                className="sst34"
                d="M682.4 405.5h0c-1.7 0-3-1.4-2.9-3.1l.4-14.8c0-1.7 1.4-3 3.1-2.9h0c1.7 0 3 1.4 2.9 3.1l-.4 14.8c-.1 1.6-1.5 2.9-3.1 2.9z"
              />
              <circle className="sst6" cx={683} cy={382.3} r={7.5} />
              <path
                className="sst31"
                d="M692.9 402.4s6.5-8.2 15-8.8c0 0 5.3 3.3 2.2 18.4 0 0 9.7 9.8 3.9 24.2-5.8 14.4-18.4 14.5-25.8 14.9-8.4.4-27.7 1.2-33.4-10.7-1.9-3.8-3.9-10-.9-18.5 0 0-7.8-9.6-1.3-24.4 0 0 6.7-2.6 18.4 9.8 0 0 1-3.6-1.6-9.4 0 0 5.4 1.8 8.6 9.3 0 0 .7-5.9 3.5-9.2 0 0 1.3 5.3 5.4 9.9 0 0-.7-9.8 5.3-12.3 0 0-.6 8.6 2.1 10.8"
              />
              <path
                className="sst7"
                d="M656 405c-2.3 4.6-.1 8.6 2 10.1M660.1 406.9c.9 1.1 1.7 2.3 2.2 3.5M657.4 417.4c.2-1 .8-1.8 1.5-2.6 1.8-2.1 4-3.8 6.5-4.9M701.8 403.5c-1 .7-1.7 1.8-2 3.1M705.5 399c2.3 5 .6 8.6-.2 10.1M698.3 406.4c2.7 2.1 5.7 3.6 9 4.3"
              />
              <path
                d="M690.8 439.5c-.8 6.5-10.2 5.5-10.5-.1l5.3-2.3 5.2 2.4z"
                style={{
                  fill: "#e51b00",
                }}
              />
              <ellipse
                transform="rotate(-88.341 685.793 433.094) scale(1.00002)"
                className="sst17"
                cx={685.8}
                cy={433.1}
                rx={2.7}
                ry={3.7}
              />
              <path
                className="sst7"
                d="M646.4 425c1.4 4.4 8 6.5 10.5 5M644.7 433.1c2.8 2.1 7.9 4.2 10.9 2M648.2 442.1c3.6.7 7.5-.6 9.9-3.3M710.9 424.2c3.7.8 7.8-.7 10.1-3.8M711.6 429c2.9 1.4 6.4 1.8 9.6.9M711.2 434.3c2.4 1.9 5.7 2.7 8.8 2.1"
              />
              <path
                d="M680.3 439.4c.3 5.6 9.7 6.6 10.5.1"
                style={{
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 3.0382,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="M676.8 435.6c-.4 3.5 8.5 3.7 9 .2-.6 2.9 8.6 3.7 9.5.3"
                style={{
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 2.2324,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                className="sst156"
                d="M672.1 425c1.6 1.3 3 3.2 4.6 5.9 1.3-2.1 2.4-4.2 3.4-6.5-2.5-2.7-3.8-5.6-3.8-5.6s-1.6 2.6-4.2 6.2zM689.6 425.5c1.6 1.3 3 3.2 4.6 5.9 1.3-2.1 2.4-4.2 3.4-6.5-2.5-2.7-3.8-5.6-3.8-5.6s-1.6 2.6-4.2 6.2z"
              />
              <ellipse
                transform="rotate(-88.551 681.806 362.767) scale(1.00002)"
                cx={681.8}
                cy={362.8}
                rx={46.9}
                ry={164.4}
                style={{
                  opacity: 0.8,
                  fill: "none",
                  stroke: "#fee56e",
                  strokeWidth: 6.0003,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10.0008,
                  enableBackground: "new",
                }}
              />
              <ellipse
                cx={683.1}
                cy={364.9}
                rx={156.5}
                ry={47.5}
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 2.1709,
                  strokeMiterlimit: 10.0002,
                }}
              />
              <ellipse
                transform="rotate(-88.341 681.815 363.598) scale(1.00002)"
                className="sst159"
                cx={681.8}
                cy={363.6}
                rx={46.9}
                ry={156.9}
              />
              <ellipse
                transform="rotate(-86.894 681.679 364.041) scale(.99997)"
                cx={681.7}
                cy={364}
                rx={31.6}
                ry={110.8}
                style={{
                  opacity: 0.8,
                  fill: "none",
                  stroke: "#fee56e",
                  strokeWidth: 6.9994,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 9.9993,
                  enableBackground: "new",
                }}
              />
              <ellipse
                transform="matrix(.00393 -1 1 .00393 315.197 1044.286)"
                cx={681.8}
                cy={363.9}
                rx={16.8}
                ry={65.8}
                style={{
                  fill: "none",
                  stroke: "#fee56e",
                  strokeWidth: 5.2801,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10.0004,
                }}
              />
              <ellipse
                transform="rotate(-84.378 681.783 364.006) scale(1.00001)"
                cx={681.8}
                cy={364}
                rx={5.3}
                ry={20.7}
                style={{
                  fill: "none",
                  stroke: "#fee56e",
                  strokeWidth: 5.2803,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10.0002,
                }}
              />
              <ellipse
                cx={682.7}
                cy={364.8}
                rx={105.5}
                ry={32}
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 1.4634,
                  strokeMiterlimit: 10.0002,
                }}
              />
              <ellipse
                transform="rotate(-87.263 681.76 363.874) scale(1.00004)"
                cx={681.8}
                cy={363.9}
                rx={16.3}
                ry={59.5}
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 1.4403,
                  strokeMiterlimit: 10.001,
                }}
              />
              <path
                d="M665.8 362.8c.2-2.3 8.6-3.6 16.4-3 7.7.6 15.9 3.1 15.7 5.4s-8.6 3.6-16.4 3c-7.8-.6-15.9-3.1-15.7-5.4z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 1.44,
                  strokeMiterlimit: 10,
                }}
              />
              <ellipse
                transform="rotate(-88.341 681.746 363.917) scale(1.00002)"
                className="sst159"
                cx={681.7}
                cy={363.9}
                rx={31.6}
                ry={105.8}
              />
              <ellipse
                transform="rotate(-88.341 681.746 363.917) scale(1.00002)"
                className="sst159"
                cx={681.7}
                cy={363.9}
                rx={16.8}
                ry={61}
              />
              <ellipse
                transform="rotate(-88.341 681.746 363.917) scale(1.00002)"
                className="sst159"
                cx={681.7}
                cy={363.9}
                rx={5.3}
                ry={17.9}
              />
              <path
                className="sst151"
                d="M641.1 607.6c7.2-11.9 16.5-25.6 25.3-36.4-6.5 8.9-14.4 20.2-20.9 29.1 5.5-9.5 10.7-19.3 17.8-27.6-2.4 2.9-3.4 6.8-5.4 10 1.2-2.4 3.1-4.4 5.4-5.7-.8 1.1-1.6 2.3-2.4 3.4 1.7-1.9 3.9-3.4 6.4-4.1-1.9 1.8-6.5 5.8-8.7 7.4 2.4-.7 9-5 11.3-6.2-2.1 1.2-5.9 3.4-7.9 4.6 2.1-.2 4.2-.7 6.2-1.4-4.1 1.3-7.9 3.2-11.4 5.7"
              />
              <path
                className="sst166"
                d="M613.4 632.8c.1 1-.3 5.9 2.3 6.4 1.8.3 8 .3 8.2-1.7.2-1.7-1.6-2.1-2.4-2.3-.8-.2-1.5-.6-1.2-2.6"
              />
              <path
                className="sst167"
                d="M613.4 635.5c2.1-.4 4.8-.8 6.9-1 0-1.3-.1-2.6-.4-3.8 0-.1-7.6-1.3-7.6-.7 0 .2 1 5.5 1.1 5.5z"
              />
              <path
                className="sst166"
                d="M625.8 623.8c4.5-1.5 6.9 4 8.1 6.9 1.9-.4 2.7-.1 3.1.4.5.6.7 1.7-.1 2.7-2.8 3.6-11.8 7.6-11.2-2.8-15.7 7.2-18-7.2-14.2-18.2 1.1-6.1 16.8-7.5 19.4-2.4 3.7-1.9 2.8-2.1 6.8-3.2-.8-3.9 2.4-5 2.8-2.5.2 1 2.2-1.2 3.2.3 2.2 3.2-2.2 5.9-3.6 6.8-11.1 7.2-5.9 1.6-10.3 12.2"
              />
              <path
                className="sst167"
                d="M625.9 633.9c2.7-1 5.2-2.5 7.6-4.1-.9-2-2.3-4.7-4.4-5.8h.6c.9-2.4 1.5-4.2 2.1-5.5-.1-3.1-.2-3.6-1.3-6.5-1.7-1.8-4.8 4.4-11.5 4.5-7.2.1-7.3-6.4-7.8-3.3-3.2 9.5-1.6 25.1 14.6 17.8-.1 1.1 0 2.1.1 2.9z"
              />
              <path
                className="sst168"
                d="M636.2 602.4v-1c0-.6-.1-1.3-.2-1.9l-.2-1c-.4-2-1-3.3-1-3.3v-.2c1.8-6 0-9.3-.9-10.5-.2-.2-.5-.4-.8-.4-4.1-.1-6.3 2.5-6.3 2.5s.2 2.9.2 3.6c-.1 0-.6-3.3-.9-3.7l-.2-.3-.1.4c-.3.9-1.8 2.3-2.3 2.7 0-.5-.2-1.7-.8-2.8l-.3-.4-.1.5c-.1.7-1.1 2.8-1.4 3.4-.9-1.9-1.5-2.6-1.9-2.9l-.3-.3-.9 4.6c-1.7-3-3.7-4.6-6.1-5.7-2-.9-3.7-.9-4.9-.7-.6.1-1 .5-1.2 1-1.9 5.1 2.1 10 2.1 10.1.1.1.1.2.1.3 0 0-.5 1.4-.8 3.3l-.1 1c-.1.8-.2 1.5-.2 2.2v1c0 .7.1 1.4.3 2.1l.2.9c.2.7.5 1.3.9 1.9.6.9 1.2 1.9 2.2 2.3.6.2 1.9 2.6 11.6 2.6 1.3 0 8.2-.8 8.1-.8 0 0 1.7-1.1 2.7-1.8 1.2-.9 2.1-1.9 2.7-3.2.3-.7.6-1.4.7-2.2l.1-.7v-.2c-.1-.9 0-1.6 0-2.4z"
              />
              <path
                className="sst168"
                d="M636.2 602.4v-1c0-.6-.1-1.3-.2-1.9l-.2-1c-.4-2-1-3.3-1-3.3v-.2c1.8-6 0-9.3-.9-10.5-.2-.2-.5-.4-.8-.4-4.1-.1-6.3 2.5-6.3 2.5s.2 2.9.2 3.6c-.1 0-.6-3.3-.9-3.7l-.2-.3-.1.4c-.3.9-1.8 2.3-2.3 2.7 0-.5-.2-1.7-.8-2.8l-.3-.4-.1.5c-.1.7-1.1 2.8-1.4 3.4-.9-1.9-1.5-2.6-1.9-2.9l-.3-.3-.9 4.6c-1.7-3-3.7-4.6-6.1-5.7-2-.9-3.7-.9-4.9-.7-.6.1-1 .5-1.2 1-1.9 5.1 2.1 10 2.1 10.1.1.1.1.2.1.3 0 0-.5 1.4-.8 3.3l-.1 1c-.1.8-.2 1.5-.2 2.2v1c0 .7.1 1.4.3 2.1l.2.9c.2.7.5 1.3.9 1.9.6.9 1.2 1.9 2.2 2.3.6.2 1.9 2.6 11.6 2.6 1.3 0 8.2-.8 8.1-.8 0 0 1.7-1.1 2.7-1.8 1.2-.9 2.1-1.9 2.7-3.2.3-.7.6-1.4.7-2.2l.1-.7v-.2c-.1-.9 0-1.6 0-2.4z"
              />
              <path
                className="sst169"
                d="M607.1 596.5c-.4 1.2-.7 2.5-1 3.8-.2 1.3-.3 2.5-.2 3.8.1.9.2 1.8.4 2.7.3.9.7 1.8 1.2 2.6.7 1 1.5 1.8 2.4 2.6.2.1.3.1.5.2.1.1.4.3.6.2.2 0 1.4.3 1.5.1s-1.2-1.3-1.4-1.4c-.1-.1-.2-.1-.3-.2l.1.1c-.8-.6-1.5-1.3-2.1-2l.1.1c-.5-.6-.8-1.2-1.1-1.9 0 .1 0 .1.1.2-.4-.8-.6-1.7-.7-2.6v.2c-.2-1.3-.2-2.6 0-4v.2c.2-1.5.6-2.9 1-4.3.1-.4-.1-.8-.5-.9-.2-.1-.5.1-.6.5z"
              />
              <path
                className="sst169"
                d="M605.4 584.8c-.6.6-.9 1.4-1 2.2-.1.4-.1.8-.1 1.3 0 .4 0 .7.1 1.1.1.8.2 1.7.4 2.5.1.4.2.7.3 1.1l.6 1.2c.5.9.9 1.8 1.6 2.6.1.1.3.2.5.2s.4-.1.5-.2c.1-.1.2-.3.2-.5v-.2c0-.1-.1-.2-.2-.3l-.1-.1.1.1c-.4-.5-.7-1.1-1-1.6-.2-.3-.3-.6-.5-.9-.1-.3-.3-.6-.4-.8 0 .1 0 .1.1.2-.3-.7-.4-1.6-.6-2.3v.2c-.1-1-.3-2.1-.2-3.1v.2c.1-.4.1-.8.3-1.2 0 .1 0 .1-.1.2.1-.2.2-.4.4-.6l-.1.1c0-.1.1-.1.1-.2.3-.3.3-.7 0-1-.2-.4-.6-.5-.9-.2zM618.4 591.8c.2-.2.4-.5.5-.8.2-.4.3-.8.4-1.2.2-.7.3-1.5.3-2.2v-.7c0-.2-.2-.3-.3-.4-.2-.1-.4-.1-.6-.1-.2.1-.3.2-.4.3-.1.2-.1.4-.1.6v-.2.5c0 .3-.1.6-.1.9v-.2c-.1.7-.2 1.4-.5 2.1 0-.1 0-.1.1-.2-.1.2-.2.3-.3.5l.1-.1c0 .1-.1.1-.2.2s-.2.3-.2.5.1.4.2.5c.1.1.3.2.5.2.3 0 .4-.1.6-.2zM621.9 590.1c.2-.6.5-1.3.7-1.9.3-.7.5-1.4.3-2.2-.1-.4-.5-.6-.9-.5s-.6.5-.5.9v.2-.2.5-.2c-.1.5-.3 1-.5 1.5l-.6 1.5c-.1.2 0 .4.1.6.1.1.3.3.4.3.2 0 .4 0 .6-.1.2-.1.3-.2.4-.4zM624.3 589.9c.9-1 1.6-2.1 2.1-3.4.1-.2 0-.4-.1-.6-.1-.1-.3-.3-.4-.3-.4-.1-.7.1-.9.5-.1.2-.1.3-.2.5 0-.1 0-.1.1-.2-.3.7-.7 1.3-1.1 1.9l.1-.1c-.2.3-.4.5-.6.7-.3.3-.3.7 0 1 .3.3.7.3 1 0z"
              />
              <path
                className="sst169"
                d="M627.3 587.6c.1-.2.2-.3.3-.5l-.1.1.6-.6-.1.1c.5-.4 1.1-.7 1.8-1-.1 0-.1 0-.2.1.8-.4 1.7-.6 2.6-.8.2 0 .3-.1.5-.1h-.2.3c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-.5c-.2 0-.3.1-.5.1-.4.1-.9.2-1.3.3-.6.2-1.2.4-1.7.6-.5.2-1 .5-1.4.8-.5.4-1 .8-1.3 1.4-.1.2-.1.4-.1.6 0 .2.2.3.3.4.2.1.4.1.6.1.1.1.3 0 .4-.2z"
              />
              <path
                className="sst170"
                d="M606.5 585.9c.7-.1 1.3-.1 2 0h.1c.1 0-.1 0 0 0h.2c.2 0 .3.1.5.1.3.1.6.1.9.2.1 0 .3.1.4.1.1 0 .1 0 .2.1h.1c.1 0-.1 0 0 0 .3.1.5.2.8.4.5.3.9.5 1.4.9.1 0 .1.1.2.1.1.1-.1-.1 0 0 0 0 .1 0 .1.1.1.1.2.2.3.2.2.2.4.3.6.5l1 1c.1.2.3.3.4.5l.1.1v.1s.1.1 0-.1c.1.1.1.2.2.2.2.3.4.5.6.8.2.3.3.6.5.9.1.2.4.3.7.2.2-.1.3-.4.2-.7s-.3-.5-.4-.7c-.4-.6-.8-1.2-1.3-1.8-.6-.7-1.3-1.4-2.1-2-.9-.7-1.9-1.3-3-1.7-1.2-.4-2.5-.6-3.8-.6h-.5c-.1 0-.2 0-.3.1s-.1.2-.1.3c-.4.5-.2.7 0 .7zM633.2 584.9c.2.3.3.6.5.9 0 .1.1.2.1.3v-.1.1c0 .1 0 .1.1.2.1.3.2.5.3.8s.2.6.2.9c0 .2.1.3.1.5v.5c.1.8.1 1.7 0 2.5v.7c0-.1 0 0 0 0V592.5c0 .1 0 .3-.1.4-.1.5-.2 1.1-.4 1.6-.1.3-.2.6-.1.8v.1c.1.4.3.8.4 1.1.2.7.4 1.4.5 2.1.1.4.2.9.2 1.3v.2s0 .1 0 0v.4c0 .2 0 .5.1.7.1 1 .1 2-.1 3.1v.1c0 .1 0-.1 0 0v.2c0 .1 0 .3-.1.4 0 .3-.1.5-.2.8-.1.3-.1.5-.2.8 0 .1-.1.3-.1.4 0 .1 0 .1-.1.2v.1c.1-.2 0-.1 0 0-.2.5-.5 1-.8 1.4-.1.1-.2.2-.2.4 0 0 0 .1-.1.1-.1.1.1-.1 0 0 0 .1-.1.1-.1.2l-.6.6c-.2.2-.4.4-.7.6-.1 0-.1.1-.2.1-.1.1 0 0 .1 0l-.1.1c-.1.1-.3.2-.4.3-.3.2-.6.4-.8.5s-.3.2-.5.2c-.1 0-.2.1-.2.1h-.1s-.2.1-.1 0h-.1s-.1 0-.1.1c-.1 0-.2.1-.3.1-.2.1-.4.1-.5.2-.3.1-2.7 1.1-2.5 1.4.1.3 2.5-.2 2.9-.3 2-.6 3.8-1.7 5.2-3.3 1.1-1.3 1.8-2.9 2.2-4.7.3-1.6.3-3.2.2-4.8-.1-1.3-.4-2.6-.7-3.9-.1-.4-.2-.8-.4-1.2-.1-.2-.1-.4-.2-.6v.3c.6-1.9.9-3.9.7-5.9-.1-1.4-.4-2.7-1-3.9-.2-.4-.3-.7-.6-1.1-.2-.3-.5-.4-.8-.2-.4.1-.5.5-.3.8z"
              />
              <path
                className="sst171"
                d="M617.5 591.2s1.3-2.2.7-4.1c0-.2.1-.3.2-.3.4 0 1.3.4 2.7 3.4M623.6 589.7s.1-2.3-1.4-4c-.1-.1-.3 0-.3.1 0 .8-.1 2.7-1.2 3.3"
              />
              <path
                className="sst171"
                d="M623.6 588.9s1.4-1.1 1.8-2.6c.1-.3.4-.3.6-.1.4.4.6 1.3.8 3.8"
              />
              <path
                className="sst171"
                d="M626.6 586.4s2.2-2.6 6.5-2.5c.4 0 .8.2 1 .5.9 1.2 2.8 4.6 1 10.8 0 0 5.9 14.8-5.9 17.8-3.1.8-5.2.7-7.8.7-3.2 0-7.3-.8-7.4-.8-11.9-2.2-6.6-16.6-6.6-16.6s-4.2-5.1-2.2-10.4c.2-.6.8-1.1 1.5-1.2 2.2-.3 7.4-.1 11.4 7.2"
              />
              <path
                className="sst171"
                d="M603.2 597.7s2 3.5 5.8 2.4M602.6 601.9s2.9 2.7 6.3 1"
              />
              <g className="sst133">
                <path
                  className="sst17"
                  d="M614.6 600.4c-3.1-.8-2.6 5.5.4 3.3.1-.1.3-.1.4.1.1.3.4.5.7.6 1.9.2 1.7-1.4 2-1.1l.1.1c.5.3 1.1.3 1.6 0 1.2-.6 1-1.7.3-2.1-.1-.1-.1-.2-.1-.4.3-1.5-1.7-1.8-2.3-.8-.2.4-.4-.8-1.5-.8-1.4.1-1.3 1.2-1.6 1.1z"
                />
              </g>
              <g className="sst133">
                <path
                  className="sst17"
                  d="M631.1 600.1c3.1-.8 2.6 5.5-.4 3.3-.1-.1-.3-.1-.4.1-.1.3-.4.5-.7.6-1.9.2-1.7-1.4-2-1.1l-.1.1c-.5.3-1.1.3-1.6 0-1.2-.6-1-1.7-.3-2.1.1-.1.1-.2.1-.4-.3-1.5 1.7-1.8 2.3-.8.2.4.4-.8 1.5-.8 1.4.1 1.3 1.2 1.6 1.1z"
                />
              </g>
              <path className="sst171" d="M603 606.1s3.6 1.3 5.9-.6" />
              <path className="sst172" d="M619 598.6v2.8M626.5 598.6v2.7" />
              <path
                className="sst17"
                d="M623.9 604.4h-1.4c-.6 0-1-.5-1-1 0-.6.5-1 1-1h1.4c.6 0 1 .5 1 1 0 .6-.5 1-1 1z"
              />
              <path
                className="sst26"
                d="M623.9 603.2h-.6c-.1 0-.2-.1-.2-.2s.1-.2.2-.2h.6c.1 0 .2.1.2.2s-.1.2-.2.2z"
              />
              <path
                className="sst171"
                d="M619 604.6s2.4 3.1 4.2-.6c0 0 1.7 3.7 4.4.6"
              />
              <path
                className="sst173"
                d="M632.5 586.6s.8.6.5 1.9c0 0-.6 2.9-1.2 3.1l-2.3-.7.1-1 1.1-1.8c0 .1.4-.8 1.8-1.5z"
              />
              <path
                className="sst171"
                d="M632.7 586.8s1 1.7-.6 5M630.4 588.6s-.8.7-1.1 2.3M633.1 593.6s-1.5-2.4-5.1-2.8"
              />
              <path
                className="sst173"
                d="M608.1 587.6s-1.3 1-.8 2.5c0 0 1.5 3.4 2.3 3.7l2.7-1.1-.2-1.2-1.6-2.1s-.6-1.1-2.4-1.8z"
              />
              <path
                className="sst171"
                d="M607.8 587.7s-2.3 1.8 1.5 6M610.6 589.6s1.4.5 1.7 2.4M608.9 595.2s.5-2.5 5.5-3.1M634.3 599.6s2.5-.2 4.2-3M634.7 601.9s2.4.9 4.5-1.2M634.7 604.5s1.7 1.8 4.5.7"
              />
              <g
                style={{
                  opacity: 0.6,
                }}
              >
                <path
                  className="sst175"
                  d="M622.6 591c.7 3.2 1 6.5.9 9.8M617.1 593.2c.7.5 1.1 1.2 1.6 1.9 1.2 1.9 2.4 3.7 3.7 5.5M624.5 600.7c.7-2.9 2-5.7 3.7-8.1M622.5 607.1c-.5 1.7-.8 3.4-.9 5.1M624.3 607.1c.8 1.4 1.4 2.9 1.8 4.5M619.2 606.7c-1.1 1.5-1.9 3.2-2.2 5M617.1 605.6c-1.7 1.4-3.2 3.1-4.3 5 0-.1 0-.2-.1-.2M614.3 605c-1.9.8-3.9 1.8-4.9 3.5M627.1 606.6c1.4 1 2.6 2.3 3.4 3.8M628.9 605.5c1.2-.1 2.3.6 3.3 1.2.6.4 1.3.8 1.7 1.4M611.9 594.4c1.2 2.4 3.8 4.2 3.8 4.3s-.1 0-.1 0M608.9 597.2c1.1 1.1 2.4 2.1 3.7 2.9M629.3 598.3c1.3-1 2.3-2.3 3-3.7M631.6 599.4c.6-.6 1.2-1.2 1.8-1.9"
                />
              </g>
              <path
                className="sst168"
                d="M621.6 620.4s.1.1.2.1.1 0 .2-.1.1-.3 0-.4c-.7-.6-1.5-.8-2.3-.7-.5-.9-.7-1.1-2.1-1.3-1-.1-1.7.3-1.9.9-1.3-.7-2.4-.6-3.3.2-.1.1-.1.3 0 .4.1.1.3.1.4 0 .4-.4 1.1-.9 2.5-.2l-.3.6c-1-.3-2 .3-2.7.9-.1.1-.1.3 0 .4.1.1.1.1.2.1s.1 0 .2-.1c.2-.2 1.2-1.1 2.3-.8v.7c-.9 0-1.7.3-2.3.9-.1.1-.1.3 0 .4 0 0 .1.1.2.1s.1 0 .2-.1c.5-.5 1.1-.8 2-.7 0 .2.1.3.2.5-.7.1-1.2.3-1.5.6-.1.1-.1.3 0 .4.1 0 .1.1.2.1s.1 0 .2-.1c.2-.2.6-.5 1.5-.5.2.2.4.3.6.4.4.2.8.3 1.2.3.5 0 1.1-.2 1.6-.5.3.1.6.3.8.6.1.1.1.1.2.1s.1 0 .2-.1.1-.3 0-.4c-.2-.3-.5-.5-.8-.6.1-.2.3-.3.4-.5.5.1.9.3 1.2.6.1 0 .1.1.2.1s.1 0 .2-.1.1-.3 0-.4c-.4-.4-.9-.6-1.4-.7.1-.2.1-.3.1-.5.4 0 1 .1 1.5.6 0 0 .1.1.2.1s.1 0 .2-.1.1-.3 0-.4c-.5-.5-1.1-.7-1.8-.7v-.4c0-.1 0-.3-.1-.4.2.1.8.2 1.4.7z"
              />
              <path
                className="sst176"
                d="M632 661.2c-1.9.9-1.3 4.7 1.5 3.8 1.8-.6 1.9-4.4-.8-4l-.7.2zM633.4 658.7c-.8.4-.6 2.1.7 1.7.8-.3.8-1.9-.4-1.8l-.3.1zM630.9 659.1c-.8.4-.6 2.1.7 1.7.8-.3.8-1.9-.4-1.8l-.3.1zM629.4 661.3c-.7.4-.5 1.8.6 1.5.7-.2.8-1.7-.3-1.6l-.3.1zM623.6 703.7c-1.9-1-4.5 1.8-2.1 3.4 1.6 1.1 4.6-1.1 2.7-3l-.6-.4zM626.5 703.3c-.8-.4-2 .8-.9 1.5.7.5 2.1-.5 1.2-1.3l-.3-.2zM624.6 701.5c-.8-.4-2 .8-.9 1.5.7.5 2.1-.5 1.2-1.3l-.3-.2zM622 701.7c-.7-.4-1.8.7-.8 1.4.6.4 1.8-.4 1.1-1.2l-.3-.2zM612.1 720.5c-1.9-1-4.5 1.8-2.1 3.4 1.6 1.1 4.6-1.1 2.7-3l-.6-.4zM614.9 720.1c-.8-.4-2 .8-.9 1.5.7.5 2.1-.5 1.2-1.3l-.3-.2zM613.1 718.3c-.8-.4-2 .8-.9 1.5.7.5 2.1-.5 1.2-1.3l-.3-.2zM610.4 718.5c-.7-.4-1.8.7-.8 1.4.6.4 1.8-.4 1.1-1.2l-.3-.2zM632.5 745.1c-2.1.4-2.4 4.2.5 4 1.9-.1 2.9-3.8.2-4.1l-.7.1zM634.5 743c-.9.2-1 1.9.2 1.8.8-.1 1.3-1.7.1-1.8h-.3zM631.9 742.7c-.9.2-1 1.9.2 1.8.8-.1 1.3-1.7.1-1.8h-.3zM630 744.6c-.8.2-.9 1.7.2 1.6.8-.1 1.1-1.5.1-1.6h-.3zM636.8 637.9c-2-.7-4.2 2.4-1.6 3.7 1.7.9 4.4-1.7 2.3-3.4l-.7-.3zM639.6 637.1c-.9-.3-1.9 1.1-.7 1.6.8.4 2-.8 1-1.5l-.3-.1zM637.5 635.5c-.9-.3-1.9 1.1-.7 1.6.8.4 2-.8 1-1.5l-.3-.1zM634.9 636.1c-.8-.3-1.7.9-.6 1.5.7.3 1.8-.7.9-1.3l-.3-.2z"
              />
            </g>
            <g id="shop_x5F_on" onMouseLeave={()=>setActiveShop(false)} style={{display: isActiveShop? "block" : "none"}}>
              <path
                className="sst42"
                d="m1093.2 496 5.4 109.6 91 33.9 73.3-48.3-.8-40.5s-14.9-21.8-27-24.8l-30.1-8.2-.6-17.9-15.9-5-.6-17.4-19.4-21.4-75.3 40z"
              />
              <path
                className="sst7"
                d="m1188.3 638.2-1-45.8s-14.9-21.8-27-24.8l-30.1-8.2-.6-17.9-15.9-5-.6-17.4-19.4-22.5M1114.2 518.9l73.7-41.5M1130.7 541.4l73.7-41.6M1114.8 536.3l73.7-41.5M1131.3 559.3l73.7-41.6"
              />
              <path
                className="sst8"
                d="m1129.5 607.3-1.3-27 51.9 17.2 1 28.7s-51-18.9-51.6-18.9zM1234.9 609.4l-1.4-40.4 20.2-12.3 1.3 39.5zM1194.1 596.5l1 29.6 31.4-19.2-.9-27.5z"
              />
              <path className="sst7" d="m1174.6 566.4 58.2-34.8" />
              <path
                className="sst44"
                d="m1108.7 568.9 53.7 18.1M1117.8 566l53.7 18M1096.1 552.7l31.2 10.5M1096.8 571.4l31.1 10.5M1097 578.3l31.2 10.6M1122.7 561.7l.2 5.5M1104.5 556l.2 5.4M1117.3 572.6l.2 5.5M1111.1 583.5l.2 5.5M1102.9 574.2l.2 5.4M1124 581.3l.2 5.5M1129 570.3l.1 5M1151 582.9l-.2-5.6M1096.4 558.8l15 5.1M1097.2 584.8l23.6 8"
              />
              <path className="sst7" d="m1243.8 563.5 1.3 38.8" />
              <path
                className="sst24"
                d="M1192.9 523.6c-.5 1.8 1.6 3.9 3.5 3.3-1.7 1-1.2 3.7.6 4.6 1.8.9 4.1.3 5.6-1 1.2 1.4 3.3 2.3 5.3 2.1s3.8-1.4 4.6-3c2.2 1.1 4.8 1.6 7.2 1.2 1.2-.2 2.5-.6 3.4-1.4s1.2-2.2.5-3.2c2.1-.4 3.5-2.7 2.7-4.6-.8-1.9-3.6-2.8-5.4-1.9-.9-1.3-2.2-2.4-3.7-2.8-1.6-.4-3.5.2-4.2 1.5-1.4-1.4-3.5-2.4-5.6-2.2s-4 2-3.8 3.9c-.5-1.3-2-2.2-3.5-2-2.1.3-1.8 2-3.1 2.9-1.5 1.1-3.5.4-4.1 2.6z"
              />
              <path
                className="sst45"
                d="m1167.9 525.8 7 13.4 17.4 6.9 12-7.3-18.3-6.6-6.8-12.5z"
              />
              <path
                className="sst5"
                d="m1174.9 539.2-2.4 3.9M1192.5 549.7l-.2-3.6M1204.3 538.8l1.5 2.9M1170.7 530l10.6-5.9M1173 534.3l10.1-5.6M1175.4 538.6l10.5-6.3M1178.8 540.3l11.2-6.1M1183.7 542.2l11.2-6.1M1188.7 544.1l11.2-6.1"
              />
              <path
                className="sst45"
                d="m1149.3 535.8 7.1 13.4 17.3 6.9 12-7.2-18.2-6.7-6.9-12.4z"
              />
              <path
                className="sst5"
                d="m1156.4 549.2-2.5 4M1173.9 559.8l-.2-3.7M1185.7 548.9l1.5 2.9M1152.1 540.1l10.7-5.9M1154.5 544.3l10-5.5M1156.8 548.7l10.6-6.3M1160.2 550.4l11.2-6.1M1165.1 552.3l11.3-6.2M1170.2 554.2l11.1-6.1"
              />
              <path
                className="sst48"
                d="M1126.5 493c1.4 2.3.5 6.4-1.6 7.7-2.1 1.3-4.9.5-6.4-1.8-1.4-2.3-1.7-6.5.4-7.8 2.2-1.3 6.2-.4 7.6 1.9z"
              />
              <ellipse
                transform="rotate(-31.943 1122.316 493.079)"
                className="sst177"
                cx={1122.4}
                cy={493.1}
                rx={4.5}
                ry={4.9}
              />
              <path
                className="sst48"
                d="M1144.7 483c1.4 2.3.5 6.4-1.6 7.7-2.1 1.3-4.9.5-6.4-1.8-1.4-2.3-1.7-6.5.4-7.8 2.2-1.3 6.2-.4 7.6 1.9z"
              />
              <ellipse
                transform="rotate(-31.943 1140.515 483.082)"
                className="sst177"
                cx={1140.6}
                cy={483.1}
                rx={4.5}
                ry={4.9}
              />
              <path
                className="sst48"
                d="M1163.4 473.3c1.4 2.3.5 6.4-1.6 7.7-2.1 1.3-4.9.5-6.4-1.8s-1.7-6.5.4-7.8c2.1-1.4 6.1-.4 7.6 1.9z"
              />
              <ellipse
                transform="rotate(-31.943 1159.113 473.383)"
                className="sst177"
                cx={1159.2}
                cy={473.4}
                rx={4.5}
                ry={4.9}
              />
              <path
                className="sst50"
                d="m1104 531.2-17.2 9.8c-1.5.8-3.3.3-4.1-1.1h0c-.8-1.5-.3-3.3 1.1-4.1l17.2-9.8c1.5-.8 3.3-.3 4.1 1.1h0c.9 1.4.4 3.3-1.1 4.1zM1104.6 548.5l-17.2 9.8c-1.5.8-3.3.3-4.1-1.1h0c-.8-1.5-.3-3.3 1.1-4.1l17.2-9.8c1.5-.8 3.3-.3 4.1 1.1h0c.9 1.4.4 3.2-1.1 4.1zM1074.4 528.5l16.6-8.6 7.3 2.1-15.9 8.9z"
              />
              <path
                className="sst50"
                d="m1082.4 530.9 15.9-8.9 1.2 34.4-16.3 10.2s-.8-35.4-.8-35.7z"
              />
              <path
                className="sst26"
                d="M1094.3 540.7v.5c.1 1.9.3 3.7.4 5.6 0 .7-.1 1.2-.7 1.4-1.9.9-3.8 2-5.8 3-.6.3-.6-.3-.7-.8-.1-1.9-.3-3.7-.4-5.6 0-.2-1.5-1-2-1.3-.3-.2-.4-.4 0-1 .5-1 1.1-1.9 1.6-2.8.2-.3.4-.6.7-.7.4-.2.8-.4 1.1-.5.4-.2.6-.1.7.3.1.2.2.4.3.5.7.5 2.2-.3 2.3-1.8 0-.4.2-.7.5-.9.4-.2.9-.5 1.3-.6.2-.1.4-.1.5 0 .7.4 2.3 1.7 2 2-.1.6-1.8 2.7-1.8 2.7z"
                id="QPPU6E_1_"
              />
              <path className="sst50" d="m1074.4 528.5 1.2 35.9 7.6 2.3-1.2-35.9z" />
              <path
                className="sst178"
                d="M1193.4 534.7c.8.4 5.2 4.8 7.1 3.5 1.8-1.2 4.2-4.2 3.1-6.3-.7-1.3-2.5-.8-3-.4-.6.5-1 .2-2.4-.9"
              />
              <path
                className="sst178"
                d="M1188.8 540.7c.9.3 6 3.8 7.6 2.2 1.5-1.5 3.4-4.9 1.9-6.8-.9-1.2-2.6-.4-3 .2-.5.6-.9.4-2.5-.5M1201.8 522.5c-.5-.3-1.8-1-2.9-.3-4.3-3-7-1.7-7.5.2-.6 2.4 3.2 4.6 7.4 4.1l.2.1c2.3 2.1 6.5-1.9 2.8-4.1z"
              />
              <path
                d="m1177 530.3 1.2 4.8c.3 3.6 7.8 6.6 9.6 6.7 1.2 0 6.5-4.9 6.6-6.1l-3.4-2.5s2.8 2.5 3.6 2.3c.5-.1 3.8-3.8 4.4-4.1 1.4-.7-3.1-2.6-3.5-4l-4.6-14.4-13.6 5.2-.3 12.1z"
                style={{
                  fill: "#fff",
                  stroke: "#222",
                  strokeWidth: 1.3547,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                className="sst17"
                d="M1183.1 522.3c-2-.6-1.7 3.4.6 3.7.5-.7 2.3-.9 2.1-2.4-.3-.9-1.5-1.3-2.2.1 0-.6-.2-1.1-.5-1.4zM1188.1 526.1c-1.8-1-1.7 3.4.6 3.7.5-.7 2.5-1 2.1-2.4-.2-.9-1.5-1.3-2.2.1 0-.6 0-1.2-.5-1.4zM1192.1 521c-2-.6-1.7 3.4.6 3.7.5-.7 1.8-.7 1.6-2.2-.3-.9-1-1.5-1.7-.1 0-.6-.2-1.1-.5-1.4zM1184.6 530.5c-1.8-1-1.7 3.4.6 3.7.5-.7 2.5-1 2.1-2.4-.2-.9-1.5-1.3-2.2.1 0-.6 0-1.2-.5-1.4zM1190.7 535.8c-1.8-1-1.7 3.4.6 3.7.5-.7 2.3-.9 2.1-2.4-.3-.9-1.5-1.3-2.2.1 0-.6-.1-1.1-.5-1.4zM1184.2 536.8c-1.8-1-1.7 3.4.6 3.7.5-.7 2.5-1 2.1-2.4-.2-.9-1.5-1.3-2.2.1 0-.6 0-1.2-.5-1.4zM1195 528.7c-1.8-1-1.7 3.4.6 3.7.5-.7 2.3-.9 2.1-2.4-.3-.9-1.5-1.3-2.2.1 0-.6 0-1.2-.5-1.4z"
              />
              <path
                className="sst168"
                d="M1196.8 514.1V513.2c0-.5-.1-1.1-.1-1.7l-.1-.9c-.3-1.7-.7-2.9-.8-2.9v-.2c1.7-5.2.2-8.1-.6-9.1-.2-.2-.4-.4-.7-.4-3.5-.2-5.6 2-5.6 2s.1 2.5.1 3.1c-.1 0-.5-2.9-.7-3.3l-.2-.3-.1.3c-.3.8-1.6 2-2.1 2.3 0-.5-.1-1.5-.7-2.5l-.2-.4-.1.4c-.1.6-1 2.4-1.3 2.9-.7-1.6-1.2-2.3-1.5-2.5l-.3-.2-.9 4c-1.4-2.7-3.1-4.1-5.2-5.1-1.7-.8-3.2-.8-4.2-.7-.5.1-.9.4-1.1.8-1.8 4.4 1.6 8.8 1.6 8.8.1.1.1.2 0 .3 0 0-.5 1.2-.8 2.8l-.1.8c-.1.7-.2 1.3-.2 1.9v.8c0 .6.1 1.3.2 1.8l.2.8c.2.6.4 1.2.7 1.7.5.8 1 1.6 1.8 2 .5.2 1.6 2.3 10 2.6 1.1 0 7.2-.5 7.1-.5 0 0 1.5-.9 2.3-1.5 1-.7 1.9-1.6 2.4-2.7.3-.6.5-1.2.7-1.9l.1-.6v-.2c.3-.3.3-.9.4-1.6z"
              />
              <path
                d="M1196.8 514.1V513.2c0-.5-.1-1.1-.1-1.7l-.1-.9c-.3-1.7-.7-2.9-.8-2.9v-.2c1.7-5.2.2-8.1-.6-9.1-.2-.2-.4-.4-.7-.4-3.5-.2-5.6 2-5.6 2s.1 2.5.1 3.1c-.1 0-.5-2.9-.7-3.3l-.2-.3-.1.3c-.3.8-1.6 2-2.1 2.3 0-.5-.1-1.5-.7-2.5l-.2-.4-.1.4c-.1.6-1 2.4-1.3 2.9-.7-1.6-1.2-2.3-1.5-2.5l-.3-.2-.9 4c-1.4-2.7-3.1-4.1-5.2-5.1-1.7-.8-3.2-.8-4.2-.7-.5.1-.9.4-1.1.8-1.8 4.4 1.6 8.8 1.6 8.8.1.1.1.2 0 .3 0 0-.5 1.2-.8 2.8l-.1.8c-.1.7-.2 1.3-.2 1.9v.8c0 .6.1 1.3.2 1.8l.2.8c.2.6.4 1.2.7 1.7.5.8 1 1.6 1.8 2 .5.2 1.6 2.3 10 2.6 1.1 0 7.2-.5 7.1-.5 0 0 1.5-.9 2.3-1.5 1-.7 1.9-1.6 2.4-2.7.3-.6.5-1.2.7-1.9l.1-.6v-.2c.3-.3.3-.9.4-1.6z"
                style={{
                  fill: "#ba61ff",
                }}
              />
              <path
                className="sst181"
                d="M1174.9 521.1c-.7-.6-1.3-1.2-1.8-1.8-.3-.5-.6-1-.8-1.5-.3-.7-.4-1.4-.5-2.2-.1-1.1-.1-2.2.1-3.3.2-1.3.6-2.5 1-3.7v-.4c0-.1.1-.1.1-.2v-.2c0-.1-.1-.2-.2-.3v.1c-.3-.5-.6-1-.8-1.5-.1-.3-.3-.5-.4-.8-.1-.2-.2-.4-.3-.7-.2-.6-.3-1.3-.4-1.9-.1-.8-.2-1.7-.1-2.5.1-.3.1-.6.2-.8.1-.2.2-.3.3-.5.2-.2.3-.6 0-.9-.2-.2-.6-.3-.9 0-.5.5-.8 1.2-.9 1.9-.1.4-.1.7-.1 1.1v.9c.1.7.1 1.4.3 2.2.1.3.1.6.3.9.1.4.3.7.5 1.1.3.7.7 1.4 1.2 2.1-.4 1.1-.7 2.2-.9 3.3-.2 1.1-.3 2.2-.3 3.3 0 .8.1 1.6.3 2.3.2.8.5 1.6 1 2.3.6.9 1.3 1.6 2 2.3.1.1.3.1.4.2.1.1.3.2.5.2.1 0 1.3.3 1.3.1.1 0-1-1-1.1-1.1zM1182.4 499.8c-.1-.1-.3-.1-.5-.1s-.3.1-.4.3c-.1.2-.1.3-.1.5v-.2.4c0 .2-.1.5-.1.7-.1.6-.2 1.1-.4 1.7 0 .1-.1.2-.2.3l-.1.1c-.1.1-.2.3-.2.4 0 .2.1.3.2.4s.3.2.4.2c.2 0 .3-.1.4-.2.2-.2.4-.4.5-.7.1-.3.3-.7.4-1 .2-.6.3-1.3.3-1.9v-.6c.1 0-.1-.2-.2-.3zM1184.8 499c-.3.1-.5.4-.5.8v.3c-.1.4-.3.8-.4 1.2-.2.4-.3.9-.5 1.3-.1.1 0 .4 0 .5.1.1.2.3.4.3s.3 0 .5-.1c.1-.1.2-.2.3-.4.2-.6.4-1.1.7-1.7.2-.6.4-1.2.3-1.9-.1-.1-.5-.4-.8-.3zM1194.1 497.6h-.4c-.1 0-.3 0-.4.1-.4.1-.8.2-1.1.3-.5.1-1 .3-1.5.5-.4.2-.9.4-1.3.7-.3.2-.6.4-.8.7 0-.1 0-.2-.1-.3-.1-.1-.2-.3-.4-.3-.3-.1-.7.1-.8.4 0 .1-.1.2-.1.3-.2.5-.6 1-.9 1.5-.2.2-.3.4-.5.5-.2.2-.3.6 0 .9.2.2.6.3.9 0 .6-.6 1.1-1.3 1.5-2.1 0 .1.1.3.3.3.1.1.3.1.5.1.1 0 .3-.1.4-.3.1-.1.1-.2.2-.3.1-.2.3-.3.5-.4.4-.3.9-.5 1.4-.7.7-.3 1.4-.5 2.2-.6h.5c.3 0 .6-.3.6-.6-.1-.4-.3-.6-.7-.7z"
              />
              <path
                className="sst182"
                d="M1171.4 499c.6 0 1.1 0 1.7.1h.1c.1 0-.1 0 0 0h.2c.1 0 .3.1.4.1.2.1.5.1.7.2.1 0 .2.1.4.1.1 0 .1 0 .2.1h.1c.1 0-.1 0 0 0l.6.3c.4.2.8.5 1.2.8l.1.1c.1.1-.1-.1 0 0l.1.1c.1.1.2.1.3.2.2.1.3.3.5.4.3.3.6.6.8.9.1.1.2.3.3.4l.1.1v.1-.1c0 .1.1.1.1.2.2.2.3.5.5.7.2.3.3.5.4.8.1.2.4.3.6.2.2-.1.3-.4.2-.6l-.3-.6c-.3-.6-.7-1.1-1.1-1.6-.5-.7-1.1-1.3-1.8-1.8-.8-.7-1.7-1.2-2.6-1.6-1-.4-2.2-.6-3.3-.6h-.4c-.1 0-.2 0-.3.1-.1.1-.1.2-.1.3-.1.4 0 .7.3.6zM1194.6 498.8c.2.2.3.5.4.8 0 .1.1.2.1.3v-.1.1c0 .1 0 .1.1.2.1.2.2.5.2.7.1.3.1.5.2.8 0 .2.1.3.1.5v.4c.1.7 0 1.5 0 2.2v.6c0-.1 0 0 0 0v.2c0 .1 0 .2-.1.3-.1.5-.2.9-.4 1.4-.1.2-.2.5-.1.7v.1c.1.3.2.7.3 1 .2.6.3 1.2.4 1.8.1.4.1.8.2 1.1v.2s0 .1 0 0V513c0 .9 0 1.8-.1 2.7v.1c0 .1 0-.1 0 0v.2c0 .1 0 .2-.1.3 0 .2-.1.4-.2.7-.1.2-.1.4-.2.7 0 .1-.1.2-.1.3s0 .1-.1.2v.1c.1-.2 0-.1 0 0-.2.4-.4.8-.7 1.2-.1.1-.1.2-.2.3l-.1.1c-.1.1.1-.1 0 0 0 .1-.1.1-.1.2-.2.2-.3.4-.5.5-.2.2-.4.4-.6.5l-.1.1c-.1 0 0 0 0 0s-.1 0-.1.1c-.1.1-.2.2-.3.2-.2.2-.5.3-.7.4-.1.1-.3.1-.4.2-.1 0-.1.1-.2.1h-.1s-.2.1-.1 0h-.2c-.1 0-.1.1-.2.1-.2.1-.3.1-.5.2-.3.1-2.3.9-2.2 1.2.1.3 2.2-.1 2.5-.2 1.7-.5 3.4-1.4 4.6-2.8 1-1.1 1.7-2.5 2-4 .3-1.4.4-2.7.3-4.1-.1-1.1-.3-2.3-.6-3.4-.1-.3-.2-.7-.3-1-.1-.2-.1-.3-.2-.5v.3c.6-1.6.9-3.4.8-5.1-.1-1.2-.3-2.3-.8-3.4-.1-.3-.3-.6-.5-.9-.1-.2-.5-.4-.7-.2-.5-.2-.6.1-.4.4z"
              />
              <path
                className="sst171"
                d="M1180.8 503.9s1.1-1.9.7-3.5c0-.1.1-.3.2-.3.4 0 1.1.4 2.2 3.1M1186.2 502.7s.1-2-1.2-3.5c-.1-.1-.2 0-.2.1 0 .7-.2 2.4-1.2 2.8"
              />
              <path
                className="sst171"
                d="M1186.2 502s1.2-.9 1.6-2.2c.1-.2.4-.3.5-.1.3.4.5 1.1.6 3.3"
              />
              <path
                className="sst171"
                d="M1188.8 500s1.9-2.2 5.7-2c.3 0 .7.2.9.5.8 1.1 2.3 4.1.6 9.4 0 0 4.8 13-5.5 15.3-2.7.6-4.5.5-6.8.4-2.8-.1-6.3-.8-6.5-.9-10.3-2.2-5.4-14.6-5.4-14.6s-3.5-4.5-1.6-9.1c.2-.5.7-.9 1.3-1 1.9-.2 6.4.1 9.8 6.5"
              />
              <path
                className="sst171"
                d="M1168.2 509.2s1.7 3.1 4.9 2.3M1167.6 512.8s2.4 2.4 5.4 1"
              />
              <path
                className="sst183"
                d="M1178.1 511.8c-2.7-.8-2.4 4.7.3 2.9.1-.1.3 0 .3.1.1.2.4.4.6.5 1.6.2 1.5-1.2 1.8-.9h.1c.4.2.9.3 1.4.1 1-.5.9-1.5.3-1.8-.1-.1-.1-.2-.1-.3.3-1.3-1.4-1.6-2-.7-.2.3-.3-.7-1.3-.8-1.2 0-1.2 1-1.4.9zM1192.4 512c2.7-.6 2.1 4.8-.4 2.9-.1-.1-.3-.1-.3.1-.1.2-.4.4-.6.5-1.7.1-1.4-1.3-1.7-1h-.1c-.4.2-.9.2-1.4 0-1-.6-.8-1.5-.2-1.8.1-.1.1-.2.1-.3-.2-1.3 1.5-1.5 2-.6.2.3.4-.7 1.4-.7 1.1 0 .9 1 1.2.9z"
              />
              <path
                className="sst171"
                d="M1167.8 516.5s3.1 1.2 5.2-.4M1181.9 510.4v2.4M1188.5 510.5l-.1 2.4"
              />
              <path
                className="sst17"
                d="M1186 515.5h-1.2c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h1.2c.5 0 .9.4.9.9 0 .6-.4 1-.9.9z"
              />
              <path
                className="sst26"
                d="M1186.1 514.5h-.5c-.1 0-.2-.1-.2-.2s.1-.2.2-.2h.5c.1 0 .2.1.2.2s-.1.2-.2.2z"
              />
              <path
                className="sst171"
                d="M1181.8 515.5s2 2.8 3.7-.4c0 0 1.4 3.3 3.8.6"
              />
              <path
                className="sst173"
                d="M1194 500.3s.7.6.4 1.7c0 0-.6 2.5-1.1 2.7l-2-.7.1-.8 1-1.6c-.1 0 .3-.8 1.6-1.3z"
              />
              <path
                className="sst171"
                d="M1194.1 500.4s.8 1.5-.7 4.4M1192.1 502s-.7.6-1 1.9M1194.3 506.3s-1.2-2.2-4.3-2.5"
              />
              <path
                className="sst173"
                d="M1172.7 500.6s-1.2.8-.7 2.2c0 0 1.2 3 1.9 3.2l2.4-.9-.1-1-1.3-1.9c-.1-.1-.6-1-2.2-1.6z"
              />
              <path
                className="sst171"
                d="M1172.4 500.6s-2 1.5 1.1 5.3M1174.8 502.3s1.2.5 1.5 2.2M1173.2 507.2s.5-2.2 4.8-2.6M1195.2 511.6s2.2-.1 3.7-2.5M1195.5 513.6s2.1.8 4-1M1195.4 515.8s1.4 1.6 3.9.7"
              />
              <path
                className="sst184"
                d="m1184.8 511-8.7-2.8s3.2 9.6 8.7 2.8zM1185.8 511l8.7-2.8c.1 0-3.1 9.6-8.7 2.8z"
              />
              <g className="sst62">
                <path
                  className="sst26"
                  d="M1192 511.4s.1-.2.2-.2l.1-.2-.8-1.2-.5.2 1 1.4zM1191 512.3s.3-.2.4-.3c.1-.1.4-.3.4-.3l-1.1-1.5-1 .3 1.3 1.8z"
                />
              </g>
              <g className="sst62">
                <path
                  className="sst26"
                  d="M1178.6 511.4s-.1-.2-.2-.2l-.1-.2.8-1.2.5.1-1 1.5zM1179.6 512.3s-.3-.1-.4-.3c-.1-.1-.4-.3-.4-.3l1.1-1.5 1 .3-1.3 1.8z"
                />
              </g>
              <path
                style={{
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1184.6 511h1.4"
              />
              <path
                className="sst178"
                d="M1183.5 533.3c0-.7 0-2.4-1.3-3 .5-6-2.3-8-4.5-7.4-2.7.7-2.7 5.8.1 9.7v.2c-.5 3.5 5.7 5.4 5.7.5z"
              />
              <path className="sst5" d="m1210.9 487 .2 33.5" />
              <path
                className="sst186"
                d="m1210 473.5-23.1 8.5s-5.2 10.4 5.4 11.6l17.7-20.1z"
              />
              <path
                className="sst120"
                d="m1210 473.9-17.2 19.6s1.3 10 11.2 6l6-25.6zM1210.3 473.5l18 18.6s-.7 10-10.8 6.7l-7.2-25.3z"
              />
              <path
                className="sst186"
                d="m1210.3 473.4 24.8 7.4s4.3 9.1-6.1 11.2l-18.7-18.6zM1210.4 473.7l-6.1 25.3s6 8.1 13.1-.2l-7-25.1z"
              />
              <path className="sst5" d="m1210.1 470-.1 3.7" />
              <path
                className="sst187"
                d="M1131.6 469.4c-.3-3.7-2.5-6.8-5.5-8-1.2-.5-2.6-.9-4.1-1h-.8c-3.6.1-6.9 1.2-8.5 2.6-2.5 2.3-4.3 3.8-4 7.4.1 1.1.3 2.3.8 3.7 2.3 7.7 9.2 19.3 9.8 20.5 1.2 2.2 3.5 2.9 5.2 1.7.9-.6 1.4-1.7 1.6-2.9.1-.4 3.2-10.4 5-17.8.4-2.1.6-4.2.5-6.2z"
              />
              <path
                className="sst187"
                d="M1149.7 459.4c-.3-3.7-2.5-6.8-5.5-8-1.2-.5-2.6-.9-4.1-1h-.8c-3.6.1-6.9 1.2-8.5 2.6-2.5 2.3-4.3 3.8-4 7.4.1 1.1.3 2.3.8 3.7 2.3 7.7 9.2 19.3 9.8 20.5 1.2 2.2 3.5 2.9 5.2 1.7.9-.6 1.4-1.7 1.6-2.9.1-.4 3.2-10.4 5-17.8.4-2.2.6-4.3.5-6.2z"
              />
              <path
                className="sst187"
                d="M1168.2 449.5c-.3-3.7-2.5-6.8-5.5-8-1.2-.5-2.6-.9-4.1-1h-.8c-3.6.1-6.9 1.2-8.5 2.6-2.5 2.3-4.3 3.8-4 7.4.1 1.1.3 2.3.8 3.7 2.3 7.7 9.2 19.3 9.8 20.5 1.2 2.2 3.5 2.9 5.2 1.7.9-.6 1.4-1.7 1.6-2.9.1-.4 3.2-10.4 5-17.8.5-2.2.7-4.3.5-6.2z"
              />
              <path
                className="sst51"
                d="m1138.9 584.1.6 16.7-10 6.5-.9-27zM1215.5 585.2l.6 16.7 10.4 4.6-.9-27z"
              />
              <path
                className="sst51"
                d="m1139.5 600.8-10 6.5 51.6 18.9-.4-10.8zM1195.1 626.1l31.4-19.6-10.4-4.6-21.1 12.6s.1 12.2.1 11.6z"
              />
              <path
                className="sst24"
                d="M1089.7 604.1c-.6-.5-1.2-1-1.4-1.7-.2-.7.4-1.5 1.2-1.5-1.3-.3-2.1-1.6-1.8-2.6s1.6-1.8 2.9-1.7c-.6-1.6-.2-3.6 1.3-4.7s4.3-.8 5.2.7c.5-1.4 3-1.6 4.3-.7 1.3 1 1.7 2.5 1.7 4 1.1-.8 2.4-1.7 3.9-1.7s2.9 1.5 2.1 2.6c1.3-.9 3.6-.5 4.4.7 1-.9 2.9-.9 4.1-.1s1.2 2.5.3 3.4c1.3-1.1 3.4-1.4 5.1-.7s2.8 2.2 2.6 3.7c1-1.2 3.2-1.6 4.7-.9 1.6.7 2.2 2.5 1.6 3.9 1.6.2 2.7 1.7 2.5 3-.3 1.3-2 2.3-3.5 2 1.6.9 2.2 2.8 1.4 4.2s-2.9 2.3-4.7 1.8c.3 1.6-.4 3.4-2.1 4.1-1.7.7-4.2-.4-4.1-1.9-.8 1.5-2.8 2.5-4.8 2.5s-3.9-1.2-4.7-2.7c-1.1 1.2-3.1 1.7-4.8 1.2-1.7-.5-2.9-1.9-3-3.4-1 1-3.2.9-4.5 0s-1.8-2.3-2.2-3.7c-.5.7-1.7.8-2.5.5-.9-.3-1.5-1-2-1.6-1-1.2-.7-2.4-1.3-3.5-.6-1.1-1.3-.9-2.3-1.7-.8-.7-1.8-1.1-1.5-2.3.1-.4 1.1-1.9 1.9-1.2zM1137.7 623.6c0 .9 1 1.7 1.9 1.4-1 .4-2.1.8-2.8 1.6-.8.8-1.2 2-.8 3 .8 1.8 3.5 1.5 5.4.9-.4 1.6.5 3.4 1.9 4.1 1.5.7 3.4.3 4.4-1.1-.3 1.9 1.7 3.8 3.6 3.3-.1 1.3.9 2.7 2.2 3.2 1.3.5 2.8 0 3.7-1 2.7 3.2 7.8 4.1 11.4 1.9.8 2.2 4.1 3 5.8 1.3 1.7 2.6 5.5 3.6 8.3 2.2.2 1 1.2 1.8 2.2 1.8s2-.7 2.3-1.8c1.6-.6 2.8-2.1 3-3.8s-.6-3.4-2-4.4c.7-1.6.9-3.4 0-4.9s-3-2.2-4.4-1.1c-.5-2.2-3.5-3.4-5.4-2 1-1.7.9-4.1-.4-5.6s-3.6-2.1-5.4-1.4c-.5-1.8-2.4-3-4.2-2.9-1.8.1-3.5 1.5-3.9 3.3-1.2-1.5-3.2-2.2-5-2-1.9.3-3.5 1.6-4.3 3.4.1-1.4-1.3-2.6-2.7-2.7-1.4 0-2.7.8-3.6 1.8 0-2.9-2.7-3.5-4.9-2.9-1.9.8-6.4 1.9-6.3 4.4z"
              />
              <path
                className="sst188"
                d="M1145.2 598.9c-1.5.4-2.7 1.3-3.8 2.3-.5.5-.1 1.3.6 1.3.8-.1 1.7-.4 2.5-.2-1.4 3.9-.4 8.7 3.6 3.3 3.6 5.8 5.3.5 3.6-3.4-.3-.7 3.8.4 4-1.4.1-1.3-4.9-3.3-8.5-2.4"
              />
              <path
                className="sst188"
                d="M1143.6 597.3c-1.2-1.8-1.1-4.3.2-6 .6.7 1.6 1.6 1.9 2.5 1.5-.1 2.1-.2 3.6-.3.1-1 .8-1.9 1.2-2.8 1 1.4 1.8 3 1.8 4.7.1 5-6.3 5.5-8.7 1.9z"
              />
              <path className="sst44" d="m1144.8 609.7.2-1.7M1151.2 610.1l-.1-1.6" />
              <path
                className="sst188"
                d="M1163.9 605.4c-1.5.4-2.7 1.3-3.8 2.3-.5.5-.1 1.3.6 1.3.8-.1 1.7-.4 2.5-.2-1.4 3.9-.4 8.7 3.6 3.3 3.6 5.8 5.3.5 3.6-3.4-.3-.7 3.8.4 4-1.4.1-1.3-4.9-3.3-8.5-2.4"
              />
              <path
                className="sst188"
                d="M1162.3 603.8c-1.2-1.8-1.1-4.3.2-6 .6.7 1.6 1.6 1.9 2.5 1.5-.1 2.1-.2 3.6-.3.1-1 .8-1.9 1.2-2.8 1 1.4 1.8 3 1.8 4.7.1 5.1-6.3 5.6-8.7 1.9z"
              />
              <path className="sst44" d="m1163.5 616.3.2-1.7M1169.9 616.7l-.1-1.6" />
              <path
                className="sst188"
                d="M1210.8 601.6c1.5.3 2.8 1.1 4 2.1.5.5.2 1.3-.5 1.3-.8 0-1.7-.3-2.5-.1 1.7 3.8 1 8.7-3.4 3.5-3.2 6.1-5.3.9-3.8-3.2.3-.7-3.8.6-4.1-1.1-.2-1.3 4.7-3.6 8.4-3"
              />
              <path
                className="sst188"
                d="M1212.3 599.8c1-1.9.8-4.3-.6-6-.5.8-1.5 1.7-1.7 2.6-1.5 0-2.1-.1-3.6 0-.2-1-.9-1.9-1.4-2.7-.9 1.5-1.6 3.1-1.5 4.9.2 5 6.7 5.1 8.8 1.2z"
              />
              <path className="sst44" d="m1212 612.4-.3-1.7M1205.6 613.2v-1.6" />
            </g>
            <g id="market_x5F_on" onMouseLeave={()=>setActiveMarket(false)} style={{display: isActiveMarket? "block" : "none"}}>
              <path
                className="sst55"
                d="M1158.5 665.2c-5.5-7.7-291 17.1-291 17.1L865 783.4c.4-.1-.9.4-.6.6 13.1 8 26.2 16.1 39.4 24.1l131.1-36c7 16.1 30.3 30.7 58.5 31.5 34.1.9 62.1-15.3 62.7-36.3.5-21 3.2-101 2.4-102.1z"
              />
              <path className="sst7" d="m903.8 808.1 3.2-120.3" />
              <path
                className="sst56"
                d="M1128.4 631.6c-9.5-.3-262.1 36.9-262.1 36.9l-.3 14.7 40.4 24.8 130.6-34c7 16.1 30.8 28.3 59 29 34.1.9 62.1-15 62.7-35.9.5-20.9 3.8-34.6-30.3-35.5z"
              />
              <path
                className="sst57"
                d="M1098.5 612.8c-9.5-.3-18.4.8-26.5 2.9h0l-205.5 52.7 40.4 24.8 131-33.6c7 16.1 30.4 28.3 58.5 29 34.1.9 62.1-15.3 62.7-36.3.5-20.9-26.6-38.6-60.6-39.5z"
              />
              <path
                className="sst58"
                d="M1100.1 620.1c-7.4-.2-17.4.9-22.7 1.9-6.8 1.2-190.8 48.4-190.8 48.4l22.1 13.1 135.1-34.7c.4.8 7.3 29.6 54.7 30.9 26.7.7 48.7-12.1 49.2-28.5.4-16.4-21-30.4-47.6-31.1z"
              />
              <path
                className="sst7"
                d="M1146.1 657.8c.4-17.2-20.2-30.8-45.8-31.5-7.1-.2-16.6.9-21.8 1.8-6.5 1.2-183.9 46.7-183.9 46.7M912.3 663.2l-.4 13.1M932.4 658.2l-.4 13M991.2 643.7l-.4 13.1M1005.4 639.9l-.4 13.1M1037.4 631.1l-.4 13.1"
              />
              <path
                className="sst17"
                d="M1051.5 602.2c-.4-.5-1.2-1-2.5-1.2-.3-.1-.5-.1-.8-.1-.7 0-1.3.1-1.9.2-3.5.8-6.6 1.6-9.4 2.3-1.8.5-3.5.9-5.4 1.4-.5.1-1 .3-1.5.4-.4.1-1.1.4-1.6.7-.6.3-1.3.8-1.7 1.2-.6.6-1.1 1.2-1.3 1.9-.2.6-.3 1.1-.3 1.5-.1.8.1 1.6.5 2.2-.3 0-.5.1-.8.1s-.6.1-.9.2c-.3.1-.6.1-.9.2h-.2c-2.1.5-4 1-6.1 1.6-2.2.6-4.6 1.2-4.7 1.3-.8.2-1.4.5-2.1 1.1-.6.4-1.1-1-1.3-1.5-.1-.3-.4-.6-.7-.8-.3-.3-.6-.5-.8-.7l-.1-.1c-.1-.1-.2-.1-.3-.2-.6-.3-1.1-.4-1.7-.4-.3 0-.5 0-.8.1-.8.1-1.6.5-2.3 1s-1.4 1.1-2 1.7c-.3.3-.6.7-1 1-.1.2-.3.3-.4.5l-.1.1c-1 1.1-2.1 2.1-2.2 1.8 0-.2-1.7-2.2-2.1-2.6 0 0-.1-.1-.2-.1-.6-.4-1.2-.6-1.9-.6h-.8c-.3 0-.7.1-1.1.2-.1 0-.2 0-.3.1-.6.3-1.2.5-1.9 1.1s-1.2 1.2-1.5 2c-.4.8-.6 1.6-.7 2.4-.1.2-.1.4-.1.6-.1.4-.1.7-.2 1 0 .1-.1.2-.1.3v.1c-.1 1.1-.2 2-.3 3-.4-.6-.9-1.1-1.4-1.5-.6-.5-1.3-.8-1.8-1h-.1c-.4-.1-1-.2-1.5-.3-.4-.1-.8-.1-1.3-.1-1.2 0-2.6.1-4.3.5-1.6.3-3.3.7-4.9 1.1l-2.4.6c-1.5.3-2.7.9-3.4 1.8-.4.4-.6.8-.9 1.4-.2.4-.4.9-.5 1.4s-.2.9-.2 1.3l-1.9 19.7-3.7-16.7c-.1-.2-3.3-3.2-3.6-3.5-.4-.5-1-.8-1.7-1-.1-.1-.2-.1-.3-.1h-.5c-1.2 0-2.6.4-3.6 1 0 0-.1 0-.1.1-.5.4-.9.7-1.2 1.2-.2.3-.5.8-.8 1.2-.3.5-.5.9-.7 1.3-.1.1-.1.2-.2.4l-.3.6-.3.7-7.7 17.2v-.3c0-.3 0-.6.1-.9.2-1.9.3-3.9.5-5.8.2-2 .3-4 .5-5.8.1-1.6.3-3.1.4-4.6.1-1.5 4.4-3.1 3.3-4.9-.2-.3-3.7-3.6-4.2-4 0 0-.1-.1-.2-.1-.6-.4-1.2-.6-1.9-.6h-.6c-.3 0-.8.1-1.3.3-2.4.7-4.3 3.6-5.9 6.2-1.8 3-2.8 4.6-3.9 6.3-.3-.5-.7-1.2-1.1-1.8 0-.1-.1-.2-.2-.3-.8-1.4.8-.4.1-1.2 0 0-3.2-3.2-3.5-3.4-.6-.6-1.5-1.2-2.7-1.3h-.4c-.4 0-.8.1-1.3.3-.8.2-1.5.6-2.2 1.1-.8.7-1.2 1.4-1.5 1.9l-.1.1c-.3.6-.6 1.4-.7 2.3-.4 2.4-.7 4.8-1 7.3l-.5 5.6-.7 6.4-.4 3.3c-.1.8-.1 1.6-.2 2.3v.1c0 .9.2 1.9.8 2.7.3.5 3.8 4.3 6.3 5.3 1.4.6-.4-4.4.7-5.6 1-1 1.6-2.3 1.8-3.6.1-.4.1-.9.2-1.4.1-.8.2-1.9.4-3.4.2-2.1.5-4.6.7-6.8.3.3.5.6.8.9.4.4 1.5 1.8 3.3 1.9.4 0 .8-.1 1.2-.2 1.4-.4 2.3-1.2 3.8-3.3l-.3 2.9-.3 3.3c0 .1 0 .3-.1.5-.1 1.2-.3 3.6 1.2 5 .3.3 3.6 3.7 4.1 3.9.1.1 0-3.2.9-3.6.3-.1.6-.3.8-.4 0 0-.1.1-.1.2-.2.3-.3.8-.4 1.1v.2c-.1.3-.2.7-.2 1.1-.1.9.1 1.6.6 2.3s3.5 3.9 4.3 4.1c3.5-.9.4-2.6 1.2-2.9h.1c.6-.3 1.2-.7 1.7-1.3.1-.1.2-.2.3-.4l.1-.1c.4-.5.6-.9.9-1.3.2-.2.3-.4.4-.6.1-.1.1-.2.2-.3.2-.3.4-.7.5-.9.1-.2.2-.4.2-.5 0 0 .1-.1.1-.2l.6-1.3c2.1-.5 4.3-1.1 6.4-1.6.6-.1 1.2-.3 1.7-.4 0 .1 0 .2.1.3.1.5.3.9.5 1.1.1.2.2.3.2.5 0 .1.1.2.2.3v.1c.1.2.4.6.8 1 .2.2.4.3.5.4.6.4 1.4-.8 2.2-.8 0 0 0 1.5.1 1.5h.2c1.2-.1 2.3-.6 3.3-1.4.7-.5 1.2-1.1 1.4-1.5 0 0 .1-.1.1-.2.2.2.4.4.7.6.1.1.2.1.3.2.5.2 1 .3 1.5.3h.4c1.3-.1 2.5-.5 3.4-1.3 1-.8 1.8-2.1 2.1-3.3.1-.3.2-1 .2-1.4 0-.2.1-.4.1-.6.1-.2.1-.4.1-.7l.6-6c.2 0 .4-.1.6-.1.5-.1.9-.2 1.5-.4l2.8 5.9c.2.5.4.9.6 1.2 1.5 2.6 5.7 6 6 6.1.6.3.7-4.1.7-4.1.4-.3.9-.6 1.2-.9l.1-.1c.4-.4.8-.8 1.1-1.6.3-.6.4-1.2.3-1.8 0-.3-.1-.7-.1-.9.3.2.6.4.8.5.1 0 .1.1.2.1.3.1.7.1 1 .1.9 0 1.7-.2 2.6-.7.7-.3 1.3-.7 1.8-1.2l.1-.1.1-.1c.2-.3.7-.7.9-1.5.2-.4.3-.8.4-1.1l.1-.1s.1-.1.1-.2c.1-.2.2-.6.2-.9l.1-.4.3-3.8 3.6 3.3.4.4.1.1.4.4c.3.3.7.5.9.7 0 0 .1.1.2.1.3.2.8.4 1.3.6.3.1.7.2 1.2.2.3 0 .5 0 .8-.1.7-.1 1.3-.3 1.9-.8.2-.1.4-.3.6-.5v.1c0 .5.1 1 .1 1.3 0 .1.1.3.1.5 0 .1.1.2.1.2 0 .1.1.2.2.4.4.7 1 1.3 1.7 1.6.4.2 3 3.5 3.5 3.5s-1.1-3.4-.5-3.6c1.6-.4 1.8-.5 3.9-1 2.3-.5 4.5-1.1 6.6-1.7H1020.9l.9-.3c.3-.1.6-.2 1-.3.9-.2 1.6-.6 2.4-1 .7-.4 1.3-.9 1.8-1.6l.1-.1c.5-.7 4.3-.6 4.4-1.4 0-.1-4-3.9-4.6-4.5-.1-.1-.2-.1-.3-.2-.5-.3-1-.5-1.6-.6h-1.5c-.4 0-.9.2-1.4.3l-1.9.5-5 1.2.4-3.5 6-1.6 1.9-.5c.5-.1 1-.3 1.5-.5.4-.1.8-.4 1.3-.5.6-.3 1.1-.7 1.5-1.1.5-.6.9-1.2 1.1-1.8.2-.5.2-1.1.2-1.4.1-1.1-.2-2-.8-2.7l-.1-.1c-.7-.6-1.5-1-2.5-1.1h-.4c-.5 0-1.2 0-2 .1h-.1c-.2.1-.5.1-.8.2-.3.1-.7.1-1 .3h-.2c-1.6.4-2.9.7-4.4 1.1l.2-2 6.6-1.7 1.8-.5c.4-.1.9-.2 1.5-.5.3-.1.7-.3 1.1-.5 0 0 .1 0 .2-.1.4-.3.7-.5 1-.7l.1-.1.3-.3c.3-.4.8-1 1-1.8.2-.5.2-1 .2-1.3.1-.8-.1-1.5-.4-2.2.3 0 .5 0 .7-.1.5 0 1.5-.3 2.6-.5l-1.8 18.3c0 .1-.1.7.1 1.3 0 .5.2.9.3 1.4.3.7.7 1.2 1.1 1.5.1.1 4.1 3.9 4.1 4 .5.3.7-3.8 1.7-4.5 0 0 .1 0 .1-.1.6-.5 1.1-1.1 1.4-1.6l.2-.2c.1-.2.3-.4.3-.6l.1-.1c.1-.3.3-.7.3-1.1.1-.3.1-.5.2-.8.1-.4.1-.8.2-1V629.5l.3-3.2c.4-4.1.7-7.2 1-9.7.3-2.2.4-4 .5-5.5.4-.1.9-.3 1.4-.4l2-.5c.4-.1.9-.2 1.4-.4h.1c.1 0 .2-.1.3-.1.3-.1.7-.3 1.1-.5.5-.3 1-.6 1.4-.9.1 0 .1-.1.2-.2.5-.6.8-1.1 1-1.7.1-.1.1-.1.1-.2.1-.5 3-.2 2.8-.5-.5-.1-3.4-2.7-4.1-3.5zM909.8 665h-.2.2c.1 0 0 0 0 0zm11.2-14.1zm8 9.2s.1 0 0 0c.1 0 .1 0 0 0zm4.6-30.4h.2-.2zm1.9 35.9c.1 0 0 0 0 0zm12.2-16.4c.1-.1.2-.3.2-.4 0 .1.1.2.1.3l-.3.1zm7.7 11.5c0-.1 0-.1 0 0 0-.1 0 0 0 0 .1 0 .1 0 0 0zm7.7-2h.2-.2zm12.9-23.9c-.2 1-1.5 2.3-2.6 2.6l-2.5.6c.1-1.1.2-2.1.3-3 1.2-.3 2.5-.6 3.6-.8.4-.1.7-.1 1-.1h.3c-.1.2-.1.4-.1.7zm2.3-8.2h.4-.4zm1 28.2h-.2c0-.1.1 0 .2 0zm4.2-13.3-.3 3.3c0 .2 0 .3-.1.4 0 .1-.1.2-.1.3 0 .3-.1.6 0 1v.4l-1.8-4c.8-.7 1.6-1.4 2.2-2.2l.1.8zm3.3 7.7c.1 0 0 0 0 0zm17.9-33.4h.2-.2zm-3.2 29.3zm5.8-23.5c-.1.5-.1 1-.2 1.5v.4l-.1.9c-.2 1.4-.3 2.7-.5 4.4l-.5 5.6-.4 4c-.3-.3-.6-.7-.9-.9l-.1-.1c-1.4-1.5-2.5-2.6-3.7-3.7-.6-.5-1.5-1.3-2.5-2.2l6.9-8.2.5-.7.1-.1.2-.2c.1-.2.3-.4.5-.6.3-.4.6-.8.8-1.1.2-.2.3-.5.5-.7-.3.4-.5 1.1-.6 1.7zm1.2 26.5c0-.1 0 0 0 0zm16.4-21.5h.3-.3zm1.3-11.6h.2-.2zm2.8-2.7h-.3.3zm18.8-9.2h.4-.4z"
              />
              <path
                className="sst59"
                d="M913.1 670.9c-1.3 0-2.8-.9-3-3.3v-.2l.1-.7c.7-7.7 1.4-16.4 2.6-24.1.1-.9.4-1.6.6-2.1l.1-.1c1-1.8 2.4-2.7 4.5-2.9h.3c1.4 0 2.2 1.1 2.7 1.7l.4.4c1.2 1.1 2 2.7 2.8 4.3.5.9 1 1.9 1.5 2.5.9-1.2 1.8-2.8 2.8-4.5 2.1-3.8 4.3-7.7 7.1-8.9.1 0 .2-.1.4-.1h.2c.3-.1.7-.2 1.2-.2s1.1.2 1.5.5l.1.1c.2.2.6.6.8 1.2v.2c.1.4.1.8.1 1.1v.2c-.3 2.8-.5 5.7-.7 8.5-.4 6-.9 12.3-2.1 18.3 0 .1-.1.2-.1.3-.2.5-.6.9-.9 1.3-.4.5-.9.8-1.5 1-.7.4-1.5.6-2.2.6-.3 0-.5-.1-.8-.1-.1 0-.1-.1-.2-.1-2.2-.9-2-3.4-1.8-4.9 0-.2 0-.4.1-.5v-.3c.3-2.7.5-5.9.8-8.9-2.4 3.8-4 5.7-6 5.6-1.8 0-3.1-1.7-4.7-4.1 0 .9 0 1.7-.2 2.3-.7 7.1-1 9.9-1.3 11.1 0 1.2-.6 2.4-1.6 3.4-1.1.8-2.4 1.4-3.6 1.4z"
              />
              <path
                className="sst17"
                d="M937.2 634.1c.2 0 .5.1.8.2.2.1.3.3.4.6 0 .3.1.6.1.9-.9 8.8-1 18-2.7 26.7-.2.3-.4.7-.6.9-.3.3-.6.6-1.1.7-.6.3-1.1.5-1.5.4-.2 0-.3 0-.5-.1-1.4-.6-1-2.6-.9-4.1.4-4 .9-9.2 1.2-13.2 0-.3-.2-.5-.4-.5-.3 0-.8.5-1.3 1.6-2.9 5-4.6 7-6 7-1.5 0-2.8-2.4-5.2-5.9-.1-.1-.1-.1-.2-.1-1.1 0-.6 4-1.1 5.3-.5 5.1-1.2 11.3-1.3 11.3 0 1.7-2.1 3.5-3.6 3.5-.8 0-1.5-.6-1.6-2 .7-7.9 1.5-16.8 2.6-24.7.1-.6.3-1.1.5-1.7.7-1.2 1.6-2 3.3-2.1h.1c1 0 1.6 1.2 2.2 1.7 2.1 2 3.3 6.7 5.4 7.9 3.2-3.3 6.4-12.6 10.3-14.3.2.1.6 0 1.1 0m0-2.9c-.7 0-1.2.1-1.5.2h-.1c-.2 0-.5.1-.7.2-3.2 1.4-5.5 5.5-7.8 9.5-.5.9-1 1.7-1.4 2.5-.1-.1-.2-.3-.2-.4-.9-1.7-1.7-3.4-3-4.6 0 0-.1-.2-.2-.3-.6-.7-1.8-2.2-3.8-2.3h-.4c-2.6.2-4.4 1.4-5.6 3.6 0 0-.1.1-.1.2-.3.6-.7 1.5-.7 2.6-1.1 7.8-1.9 16.5-2.6 24.2l-.1.7v.5c.2 2.3 1.6 4.6 4.4 4.6 1.5 0 3.2-.6 4.5-1.9 1.2-1.2 1.9-2.6 2-4 .1-.3.1-.7.2-1.1.1-.7.2-1.5.3-2.7.2-1.8.4-4.1.6-6.2 1 1.1 2.2 1.7 3.6 1.8 1.5 0 2.8-.6 4.1-2-.1 1.3-.3 2.5-.3 3.7V660.3c0 .1 0 .3-.1.5-.1 1.5-.5 5.1 2.8 6.4.1.1.3.1.4.2.4.1.7.1 1.1.1 1 0 1.9-.2 2.8-.7.7-.3 1.4-.7 2-1.3.4-.5.8-1.1 1.1-1.7.1-.2.2-.4.2-.7 1.2-6.1 1.7-12.3 2.1-18.4.2-2.8.4-5.7.7-8.5v-.4c0-.4-.1-.8-.2-1.3 0-.1-.1-.3-.1-.4-.3-.7-.6-1.3-1.2-1.8-.1-.1-.2-.1-.3-.2-.9-.6-1.6-.8-2.5-.9z"
              />
              <path
                className="sst59"
                d="M938.9 671.5c-.4 0-.8-.1-1.1-.2-.6-.2-1.2-.6-1.6-1.1-.6-.9-.5-1.8-.2-2.9.1-.3.2-.7.4-1 .1-.1.1-.3.1-.3l.1-.1 10.5-23.4c.2-.6.4-.8.6-1.4l.2-.4.6-1.2c.8-1.6 2.8-3.2 4.9-3.2.8 0 2.7.4 3.4 3.1 0 0 0 .2.1.3.1.3.3.7.4 1.1l6.4 19.1v.5c.1.3.2.7.2 1V662.6c-.1.6-.3 1.1-.6 1.7-.3.5-.7.9-1.2 1.3-.9.7-1.9 1.1-2.9 1.2h-.2c-.6 0-1.2-.2-1.7-.6-.1-.1-.2-.2-.4-.3l-.1-.1c-.5-.4-.7-.9-1.1-1.7-.1-.2-.3-.6-.4-1.1 0-.3 0-.3-.6-.4-.7 0-1.7.2-2.6.4-.8.2-1.6.4-2.4.5-.7.2-1.4.3-2 .5-1.8.4-2.2.5-2.6 1.9l-.1.1c-.3.7-.5 1.4-1.2 2.6-.2.3-.4.8-.8 1.1l-.1.1c-.1.2-.2.3-.3.4-1 .7-2.4 1.3-3.7 1.3zm12.5-20.3c-.4.9-.8 1.7-1.2 2.5-.2.3-.4.7-.5 1 .6-.2 1.4-.4 2.1-.6 0 0 .5-.1.6-.1v-.1c-.2-.5-.4-1-.5-1.5-.1-.3-.3-.8-.5-1.2z"
              />
              <path
                className="sst17"
                d="M953.4 637.5c.9 0 1.7.6 2 2 0 .2.4.9.5 1.5l6.4 19.1v.1s0 .1.1.3c0 .2.1.5.1.7v1c0 .3-.2.7-.4 1s-.5.7-.9.9c-.7.6-1.4.9-2.2 1-.3 0-.6-.1-.9-.3-.1-.1-.1-.1-.2-.1s-.1-.1-.2-.1c-.3-.2-.5-.6-.8-1.3-.1-.2-.2-.3-.2-.5-.2-1.3-.9-1.7-2-1.7-1.6 0-3.8.8-5.4.9-3.1.9-4.8.4-5.7 3.4-.3.7-.5 1.2-1.1 2.3l-.6.9c-.1 0-.2.2-.2.3-.1.1-.1.1-.2.3-.5.6-1.5 1.1-2.4 1.1-.2 0-.5-.1-.8-.1-.3-.1-.6-.3-.8-.5-.2-.4-.3-.8 0-1.9.1-.2.2-.6.3-.8s.2-.3.2-.4l.1-.1 10.5-23.4c.3-.7.4-.9.8-1.8.2-.4.3-.7.6-1.1.3-1.5 2-2.7 3.4-2.7m-5.3 19.1c.8 0 2.4-.6 4.1-.9 2-.4 2.3-.4 1.6-2.2-.5-1.4-1.1-3-1.8-4.6-.1-.3-.3-.5-.5-.5-.3 0-.6.2-.7.8-1 2-1.9 3.9-2.7 5.7-.8 1.2-.6 1.7 0 1.7m5.3-22c-2.7-.1-5.2 1.9-6.2 4-.3.5-.5.9-.6 1.3l-.2.4c-.3.5-.4.8-.7 1.4l-10.5 23.4-.1.1-.1.1s-.1.1-.1.3c-.2.4-.3.8-.4 1.2-.3 1.2-.5 2.7.4 4v.1c.6.8 1.4 1.4 2.3 1.7.5.2 1 .2 1.5.2 1.7 0 3.5-.7 4.7-2 .1-.1.2-.2.4-.5l.1-.1c.4-.5.7-1 .9-1.4.8-1.2 1.1-2 1.3-2.7 0 0 .1-.1.1-.2.1-.4.2-.6.3-.6.2-.1.8-.2 1.3-.3s1.2-.3 1.9-.4c.8-.1 1.7-.3 2.5-.5.6-.1 1.2-.3 1.7-.3l.3.6c.4.8.7 1.5 1.4 2.1l.1.1c.1.1.3.3.5.4.7.5 1.6.8 2.5.8h.4c1.3-.1 2.5-.6 3.6-1.5.8-.6 1.3-1.3 1.6-1.6.5-.7.8-1.5.8-2.3.1-.5 0-.9 0-1.2v-.2c0-.4-.1-.9-.2-1.3v-.5l-6.3-19c-.1-.4-.3-.8-.4-1.2 0-.1 0-.1-.1-.2-.5-2-1.9-4.1-4.7-4.2z"
              />
              <path
                className="sst59"
                d="M966.8 664.6c-1 0-1.9-.5-2.6-1.5 0-.1-.1-.2-.1-.3-.1-.3-.2-.5-.2-.8v-.5c0-.8.6-7.7 1.1-13.6 1-10.4 1.4-12.7 1.8-13.5.2-.5.4-.9.8-1.1l.2-.2c3.5-2.2 11.1-3.5 14.6-3.4h.6c.5.1 1.1.2 1.5.3.5.2 1.1.4 1.7.9 2 1.8 3 4.4 2.7 7.4-.3 3.4-2.3 6.9-5.1 8.9.4 1.2 1.6 3.6 2 4.6.5.9.6 1.3.8 1.7l.3.6c.2.4.5 1.1.6 2.2 0 .5-.1 1-.3 1.4-.7 1.4-2.2 2.5-3.9 2.8h-.7c-.6 0-1.1-.2-1.5-.5-.6-.4-1-.8-1.4-1.4 0 0 0-.1-.1-.1 0-.1-.1-.2-.2-.4-.2-.3-.4-.6-.5-1.1-.2-.4-2.1-4.4-3-6.3 0 0 0-.1-.1-.2-.7.2-1.4.4-2 .5-.3.1-.7.2-1.1.3-.3.9-.5 3.5-.6 4.9-.1 2.2-.2 3.5-.5 4.4-.4 1.9-2.7 4.1-4.8 4zm7.1-25.8c-.1 1.8-.3 3.2-.4 4.2 0 .1-.1.3-.1.5.4-.1.8-.2 1.3-.3.6-.2 1.4-.4 2.3-.6 1.6-.5 3.7-2.4 3.2-4.4v-.1c-.2-.1-.6-.2-1.3-.2-2-.1-4.3.5-5 .9z"
              />
              <path
                className="sst17"
                d="M982.4 631.1h.5c.4.1.9.1 1.3.2.5.2.9.3 1.1.6 4.2 3.7 2.2 11.2-2.8 14.3-1.1.3 2.8 7.3 2.8 7.6.1.2.2.5.3.7.2.3.4.8.5 1.7 0 .3-.1.6-.2.8-.5.9-1.5 1.8-2.8 2h-.3c-.3 0-.5-.1-.7-.3-.4-.3-.8-.6-1-1s-.5-.8-.7-1.4c0 0-2.1-4.5-3-6.4-.4-.6-.3-1.1-.8-1.1-.2 0-.6.1-1.1.3-1.2.4-2.1.5-3.2.8-1.7 0-1.1 8.7-1.9 10.2-.2 1.1-2 3-3.4 2.9-.5 0-1-.3-1.4-.8-.1-.2-.1-.6-.2-.8 0-1.4 2-25.8 2.8-26.5.1-.3.3-.6.5-.8 3-1.8 10.4-3.1 13.7-3m-9.9 14c.7 0 2.2-.5 4.9-1.2 2.3-.7 4.9-3.2 4.2-6.1 0-1-1.2-1.4-2.7-1.5-2.7-.1-6.6 1.1-6.4 2.1-.2 5-1.3 6.7 0 6.7m10-16.9c-3.3-.1-11.4 1.1-15.5 3.6-.2.1-.3.2-.5.4-.4.4-.7.9-1 1.5-.5.8-.7 2.1-1.1 5.3-.3 2.2-.6 5.2-1 8.8-.6 6-1.1 12.9-1.1 13.8 0 .2 0 .5.1.7v.1c0 .2.1.6.3 1l.3.6c.9 1.3 2.2 2 3.7 2.1 2.9.1 5.6-2.5 6.3-5 .4-1 .4-2.4.6-4.7.1-1.1.2-2.8.3-3.8h.2c.3-.1.6-.1.9-.2l.8 1.6c.8 1.7 1.6 3.4 1.8 3.7.2.5.5.9.6 1.2 0 .1.1.2.2.3 0 .1.1.2.2.3.5.7 1.1 1.3 1.8 1.8.7.4 1.5.7 2.3.7.3 0 .6 0 .9-.1h.1c2.2-.4 4-1.7 4.9-3.6l.1-.1c.3-.7.4-1.4.4-2.1-.1-1.4-.5-2.3-.7-2.7l-.3-.6c-.1-.4-.4-.9-.8-1.7-.4-.7-1.1-2.3-1.6-3.5 2.7-2.3 4.5-5.7 4.9-9.2.3-3.4-.8-6.5-3.2-8.5-.8-.6-1.5-1-2.1-1.1l-.1-.1c-.6-.2-1.3-.3-1.7-.3h-.1c-.5-.2-.8-.2-.9-.2zm-7.2 11.6c.8-.3 2.2-.6 3.4-.5-.3.9-1.3 1.6-2.1 1.9-.5.1-1.1.3-1.5.4.1-.5.1-1.1.2-1.8z"
              />
              <path
                className="sst59"
                d="M990.2 655.1c-.3 0-.6-.1-.9-.1 0 0-.1 0-.1-.1-.4-.2-1-.5-1.5-1.3-.1-.2-.2-.4-.2-.6-.2-.4-.3-.8-.2-1.3v-1.6c.6-5.4 1.1-11 1.4-15.8.1-2 .3-3.4.5-5.4v-.1s0-.1.1-.2c.1-.3.1-.7.2-1.1 0-.2.1-.4.1-.6.1-.7.3-1.4.7-2.2.8-1.4 2.4-2.9 4.5-2.9.5 0 1 .1 1.5.3.1.1.3.2.4.3.4.3.7.8.8 1.3.4 1.1.3 2.6 0 4.8 1.6-1.9 3.1-3.7 4.7-5.4l.1-.1c.2-.2.3-.4.5-.6.3-.4.6-.7 1-1.1.5-.6 1.2-1.2 1.9-1.6.8-.6 1.7-.9 2.6-.9s1.8.4 2.4 1.1c.5.4.8 1 .8 1.8v.2c-.1.5-.2.9-.4 1.3 0 0-.1.1-.1.2-.1.1-.1.2-.2.3-.2.2-.3.5-.5.8l-.1.1c-.3.4-.5.7-.8 1-.2.2-.3.4-.5.6-.1.1-.2.2-.2.3-2.4 2.9-4.2 4.9-5.5 6.4-1.2 1.3-2.3 2.6-2.5 3.1.2.2.8.8 1.4 1.2 1.2 1 3.1 2.5 5.4 5.1l.1.1c.4.4.7.7 1.1 1.2.5.5.8 1.1 1 1.9.3.7.2 1.4-.2 2.2-.3.7-.6 1.2-1.1 1.7l-.1.1c-.3.3-.6.6-1 .8-.5.4-1 .5-1.7.7h-.6c-.6 0-1.2-.2-2-.6l-.1-.1c-.5-.3-1-.7-1.6-1.3l-.4-.4-.6-.5c-1.7-1.6-3.2-3.1-4.2-4 0 1.9-.1 4.7-1.1 8-.2.6-.6 1-.8 1.3l-.1.1c-.4.5-1 .8-1.6 1.1-.8.3-1.5.5-2.3.5z"
              />
              <path
                className="sst17"
                d="M1008.1 620.2c.5 0 1.1.2 1.5.7.2.2.3.4.3.8 0 .3-.1.6-.3.9-.2.3-.4.7-.6 1-.3.4-.5.8-.8 1.1-.2.3-.5.6-.7.9-11.8 14.4-10.3 7.7-1.1 17.8l.1.1c.4.3.7.7 1 1.1.4.3.6.8.7 1.3.2.4.2.7-.1 1.2-.2.4-.4.9-.8 1.2-.3.3-.6.6-.9.8-.3.2-.7.4-1.1.5h-.3c-.3 0-.7-.1-1.3-.5-.4-.3-.8-.5-1.4-1.2l-.4-.4c-4.2-4-6-5.7-6.7-5.7-1.2 0 .2 4.1-1.6 9.8-.1.3-.4.6-.6.9-.3.3-.7.6-1.1.7-.6.3-1.1.5-1.6.4-.2 0-.4 0-.5-.1-.3-.1-.5-.3-.7-.6 0-.1 0-.1-.1-.2v-.3c-.1-.2-.2-.5-.2-.8V650c.5-5 1-10.7 1.4-15.9.1-2 .3-3.4.5-5.3v-.1c.2-.6.2-1.2.3-1.8s.2-1.1.5-1.8c.6-1.1 1.8-2.2 3.2-2.1.3 0 .7.1 1.1.2.1.1.3.3.3.6.8 1.7-1 7.7.1 7.7.4 0 1-.6 2.2-2.2 1.6-1.9 3.2-3.8 4.8-5.6l.1-.1c.5-.5 1-1.1 1.5-1.6.4-.5 1-1 1.6-1.4.5-.2 1.1-.5 1.7-.4m.1-2.9c-1.2 0-2.4.4-3.4 1.1-.8.5-1.6 1.1-2.2 1.9-.3.3-.6.7-1 1-.1.2-.3.3-.4.5l-.1.1-.1.1c-.6.7-1.3 1.5-1.9 2.2 0-.4-.1-.7-.3-1.1-.2-.8-.6-1.5-1.2-2-.2-.2-.5-.4-.9-.5-.7-.3-1.3-.4-2-.4-2.4-.1-4.6 1.4-5.9 3.6l-.1.1c-.5.9-.7 1.8-.8 2.7-.1.2-.1.4-.1.6-.1.3-.1.7-.2 1-.1.1-.1.2-.1.4v.1c-.2 2-.4 3.4-.5 5.4-.3 4.7-.8 10.4-1.4 15.8 0 .3-.1.7 0 1.1v.7c0 .6.1 1.2.3 1.7.1.3.2.6.4.9.6 1.3 1.6 1.8 2.3 2 .1.1.2.1.3.1.4.1.8.2 1.1.2 1 0 1.9-.2 2.9-.7.7-.3 1.4-.8 2-1.3l.1-.1.1-.1c.3-.3.8-.9 1.1-1.8.6-2 .9-3.8 1.1-5.3.6.6 1.3 1.2 2 1.8l.6.5.4.4c.7.7 1.2 1.2 1.8 1.5 0 0 .1.1.2.1.7.4 1.6.8 2.6.8.3 0 .6 0 .9-.1.8-.1 1.5-.4 2.2-.9.5-.3.9-.7 1.2-1l.1-.1c.7-.6 1.1-1.3 1.5-2.2.6-1.3.4-2.4.2-3.2-.2-.9-.7-1.7-1.3-2.4-.4-.5-.8-.9-1.2-1.2l-.1-.1c-2.3-2.6-4.3-4.1-5.5-5.1-.1-.1-.3-.2-.4-.3.4-.6 1.1-1.3 1.7-1.9 1.3-1.5 3.2-3.6 5.6-6.5l.1-.1.2-.2c.1-.2.3-.4.5-.7.3-.4.6-.8.8-1.1.2-.3.4-.6.6-.8.1-.1.1-.2.2-.2.1-.1.2-.2.2-.3.3-.6.4-1.2.5-1.8v-.3c0-1.2-.5-2.1-1.2-2.8-1-1.3-2.2-1.8-3.5-1.8z"
              />
              <path
                className="sst59"
                d="M1011.9 653.9c-.4 0-.7-.1-1-.2-.6-.2-1-.7-1.4-1.2-.1-.1-.1-.2-.2-.3 0 0-.1-.1-.1-.2s-.1-.2-.1-.3c-.1-.3-.1-.7-.1-1.3.3-4.7.9-10 1.5-15.1.3-2.5.5-4.8.8-7.1v-.4c.1-.5.2-1 .2-1.4v-.1c.2-1.1.8-2.7 2-3.8.7-.6 1.5-.9 2.2-1h.1c1.3-.3 2.6-.7 3.9-1 2.2-.6 4.4-1.2 6.5-1.7h.2c.3 0 .6-.1.9-.2.3-.1.6-.1.9-.2.5-.1 1-.2 1.5-.2.2 0 .4 0 .7.1.9.1 1.7.5 2.1 1.1.4.5.7 1.6.3 3.1-.3 1.3-1.6 2.5-3.4 3-3.7 1.2-6.2 1.7-7.8 2-1.1.3-2.2.5-2.4.7-.1.2-.2 1-.2 1.8-.1.5-.1 1.2-.1 1.9.8-.2 1.9-.5 2.8-.8 1.4-.4 2.2-.7 2.9-.7.3-.1.6-.1 1-.2.3 0 .6-.1.9-.2.7-.1 1.3-.2 1.8-.1h.3c.8.1 1.5.4 2 .9l.1.1c.6.8.8 2 .4 3.3-.2.6-.5 1.1-.9 1.6-.3.4-.7.7-1.2.9-.4.2-.8.4-1.2.5-3.8 1.2-6.2 1.8-7.8 2.1-.8.2-1.7.3-1.9.5-.1.2-.2 1.1-.2 1.9-.1.9-.1 2-.3 3.4 1-.2 2.5-.6 3.8-1 2.4-.7 4.9-1.4 6.6-1.4.7 0 1.3.2 1.7.5l.1.1c.3.3.8.8.9 1.6v.1c0 .3 0 .7-.1 1.2-.1.7-.3 1.3-.8 1.9-.5.6-1 1.1-1.6 1.4-.7.5-1.4.8-2.2 1l-.9.3-.9.3H1023.9c-2 .6-4.4 1.1-6.8 1.7-1.3.3-2.6.6-3.8.9-.5.1-1 .2-1.4.2z"
              />
              <path
                className="sst17"
                d="M1029.9 619.3c.2 0 .4 0 .6.1 1.2.1 1.6 1 1.1 2.4-.2.9-1.1 1.7-2.4 2-13.4 4.1-10.7.4-11.8 9 .1.2.5.4.9.4 1.7 0 5.4-1.6 6.4-1.6.5-.1 1.2-.3 2.1-.5.5-.1 1-.1 1.5-.1h.3c.5.1.8.2 1 .5.4.4.4 1.3.1 2.1-.1.3-.3.6-.6 1-.2.2-.5.5-.8.6s-.7.3-1.1.5c-13.3 4.3-9.9-.4-11.4 10.3 0 .3.3.4.8.5 2.2.1 8.4-2.5 11.2-2.4.4 0 .7.1 1 .2.2.2.4.4.5.7 0 .2 0 .6-.1.9-.1.5-.2.9-.5 1.3s-.7.8-1.2 1c-.6.4-1.2.7-1.9.9-.6.2-1.3.4-1.9.6h-.2c-3.1.9-7.3 1.8-10.6 2.6-.3.1-.7.2-1 .2-.2 0-.4-.1-.5-.1-.3-.1-.5-.3-.6-.6-.1-.1-.1-.2-.1-.2 0-.1-.1-.1-.1-.2 0-.3-.1-.5-.1-.8.5-7 1.5-15.2 2.2-22.2v-.2c.1-.6.2-1.1.2-1.7.2-.9.6-2.1 1.6-2.9.4-.3 1-.7 1.8-.8 3.2-.8 7-1.9 10.4-2.7h.1c.6-.1 1.3-.3 1.9-.4.4-.3.8-.4 1.2-.4m.1-2.8c-.7 0-1.3.1-1.8.2-.3 0-.6.1-.9.2-.3.1-.6.1-.8.2H1026.2c-2.1.5-4.4 1.1-6.5 1.7-1.4.3-2.7.7-3.9 1h-.2c-.9.2-1.8.6-2.7 1.3-1.2 1-2.1 2.6-2.5 4.6 0 .1-.1.2-.1.3-.1.4-.1.9-.2 1.4v.5c-.2 2.3-.5 4.6-.8 7.1-.6 5.1-1.1 10.4-1.5 15.2-.1.7.1 1.3.1 1.6 0 .2.1.4.2.6 0 .1.1.2.1.3s.1.3.2.4c.5.9 1.2 1.5 2.1 1.9.5.2 1 .3 1.5.3.6 0 1.2-.1 1.8-.3 1.2-.3 2.4-.6 3.7-.9 2.4-.6 4.8-1.2 6.9-1.7h.4l.9-.3c.3-.1.6-.2 1-.3.9-.3 1.7-.6 2.6-1.1.7-.4 1.4-1 2-1.8l.1-.1c.6-.8.9-1.7 1-2.6.1-.6.1-1.2.1-1.5v-.2c-.2-1-.6-1.8-1.4-2.5-.1-.1-.2-.1-.3-.2-.7-.4-1.5-.7-2.5-.7-1.9 0-4.3.7-7 1.4-.5.2-1.2.4-1.8.5.1-.5.1-1 .1-1.4 0-.3.1-.6.1-.9.3-.1.6-.1.9-.2 1.6-.3 4.1-.9 7.9-2.1l1.5-.6c.7-.4 1.2-.7 1.6-1.3.6-.7 1-1.4 1.3-2.2.5-1.8.3-3.4-.6-4.6l-.2-.2c-.5-.5-1.4-1.2-2.9-1.3h-.5c-.5 0-1.2 0-2.1.1h-.1c-.3.1-.6.1-.9.2-.3.1-.6.1-.9.2-.8.1-1.7.3-3.1.8-.2.1-.4.1-.7.2 0-.2.1-.5.1-.7.4-.1.9-.2 1.4-.3 1.7-.4 4.2-.9 7.9-2.1 2.3-.7 3.9-2.2 4.3-4 .6-2.1.1-3.5-.5-4.3-.7-1-1.8-1.6-3.2-1.8h-.9z"
              />
              <path
                className="sst59"
                d="M1038.4 640.6c-.5 0-1-.1-1.3-.4l-.1-.1c-.3-.2-.7-.6-.8-1.2-.2-.4-.3-.8-.3-1.3-.1-.9-.1-1.2 0-1.7.1-.2.1-.6.1-1.1l1.7-17.7c-.5.1-1.1.3-1.5.4-1 .3-1.6.4-2.1.4-.3 0-1.1.1-1.6.1h-.2c-1.2 0-2.3-.7-2.7-1.8-.5-1.4-.1-3 1.1-4.2.3-.3 1-.8 1.6-1.1h.1c3.9-1.5 8.3-2.5 12.6-3.5 1.7-.4 3.3-.8 4.9-1.2h.1c.5-.1 1.1-.2 1.7-.2.2 0 .5 0 .7.1.9.1 1.5.4 2 1s.8 1.3.7 2.1c-.1.9-.4 2.8-2.5 3.8-.9.6-2.5 1-4.3 1.4l-.5.1c-.4.1-.8.2-1.1.3-.3.1-.6.1-.8.2v.6c-.1 1.2-.3 3.4-.6 5.9-.4 4.1-1 9.2-1.3 13-.1.5-.1.8-.3 1.5l-.1.2c-.1.3-.2.9-.6 1.5-.7 1.5-2.4 2.7-4.2 2.8.1.2-.2.2-.4.1z"
              />
              <path
                className="sst17"
                d="M1051.7 607.5c.2 0 .4 0 .6.1.5.1.9.2 1.1.5.2.2.4.6.4 1-.1.9-.3 2-1.7 2.6-.9.6-3.3 1.1-4.5 1.4-2.4.7-3.1.4-3 2.5-.2 2.9-1.4 12.7-1.8 18.9-.1.4-.1.6-.3 1.6 0 .2-.1.7-.4 1.1-.4 1-1.6 1.9-3 2h-.5c-.2 0-.4-.1-.6-.2-.2-.2-.4-.3-.5-.6s-.2-.5-.2-.8c-.1-1.2 0-1 .1-2.6.5-4.7 1.6-16.7 1.8-18.6.2-.5 0-.7-.6-.7-1.2 0-3.9 1-4.7.9-.3 0-1.1.1-1.5.1h-.1c-1.8 0-2-2.1-.6-3.5.2-.2.8-.7 1.2-.9 5.3-2 11.7-3.2 17.3-4.6.6-.1 1-.2 1.5-.2m0-2.8c-.8 0-1.4.1-2 .2h-.1c-1.5.4-3.2.8-4.9 1.2-4.3 1-8.8 2-12.8 3.5-.1 0-.2.1-.3.1-.7.4-1.5 1-1.9 1.4-1.6 1.6-2.2 3.8-1.4 5.7.6 1.6 2.2 2.7 4 2.7h.1c.6 0 1.3-.1 1.7-.1.5 0 1.1-.1 1.9-.3l-1.5 15.6v.1c0 .5-.1.8-.1 1.1-.1.7-.1 1.1-.1 2 0 .6.2 1.1.4 1.7.4.9.9 1.4 1.3 1.7.1.1.2.1.3.2.6.4 1.3.6 2 .6h.8c2.2-.1 4.4-1.6 5.3-3.5.5-.8.6-1.5.7-1.9l.1-.2c.2-.8.3-1.1.3-1.6.3-3.7.8-8.9 1.3-12.9.3-2.4.5-4.4.6-5.6.2 0 .5-.1.9-.2.1 0 .3-.1.4-.1 1.9-.5 3.5-.9 4.7-1.6 2.8-1.3 3.1-4 3.2-4.8v-.1c.1-1.2-.3-2.4-1.1-3.2-.5-.6-1.4-1.2-2.9-1.4-.2-.3-.6-.3-.9-.3zm-4.3 10.4z"
              />
              <path
                className="sst60"
                d="m884.2 700.5-.2 5.9 8.9 5.6.2-5.8zM889.5 710l-.3 5.8 9 5.6.1-5.8zM870.8 742.1l-.2 5.9 8.9 5.6.1-5.8z"
              />
              <path
                className="sst7"
                d="m876.2 688.6.3-12.9 12.8-2.7M891 697.8l.4-12.9 13.4-3.1M906.9 694l-.3 12.9M925 702.7l.3-12.8-11.5-7.1M951.6 695.7l.3-12.8-12.1-6.8M983.3 687.5l.3-12.8-14-6.2M1011.1 680.3l.3-12.8-13.6-6.1M1036.9 673.8l.4-12.8 6.4-12.3M1046 684.9l.3-12.8 12.7-2.5M1065.1 696.1l.4-12.8 7.8-6.9M1096.1 702.3l.4-12.8-.7-9M1125 698.9l.4-12.9-8.4-7.4M1145.7 689l.3-12.9-12.3-3.8M906.9 693.2l1.7-9.7M1147.3 656.4l10.1 1.4M886.6 670.3l-20.1-1.9M891.3 662.4l6.6 4.2M1050.1 621.7l6.6 4.2-.2 7.5M1067.6 617.6l6.5 4.1-.2 6.5"
              />
              <path className="sst57" d="m1090.4 613.4 1.6 5.6-.2 7" />
              <path
                className="sst7"
                d="m1116.1 615.4-6.4 4.4-.2 6.5M1138.3 624.2l-9.6 2.2-.2 6.2M1154.6 639.4l-9.8.1-.3 10.1"
              />
              <path
                className="sst60"
                d="m1087.7 715.6-.1 5.3s9.5 3.7 17.1.3l.1-4.7s-8.7 1.6-17.1-.9z"
              />
              <path
                className="sst60"
                d="m1100.7 720.7-.2 6.2s10.5 1.6 20.2-3.4l.2-6.7c.1 0-7.4 5.2-20.2 3.9zM1053.7 698.8l-.2 5.7s2.8 6.1 13.1 7l.5-5.4c0-.1-8.4-1.6-13.4-7.3z"
              />
              <path
                className="sst8"
                d="m874 711.3-.4 13.8 8 5.6.3-14.2zM886.1 733.3l-.9 14.6 8.5 5.3 1.4-15z"
              />
              <path className="sst7" d="m878 709.9-.2 5M891.1 733.5l-.5 4.3" />
              <path
                className="sst58"
                d="m910.9 797.2 2.2-83 40.4-11-2.1 81.6zM956.1 793.9l2.3-87 41.2-10.2-2.3 85.7zM1002.4 771l2.2-81.7 32.6-8s-.9 24.8-.5 25.3c2.7 4.2 15.9 21 42.3 25.2 38.8 6.2 61-8.6 61-8.6l-1.5 62.6s-28 17.7-65.6 6.6c-28-8.2-38.3-30-38.3-30l-32.2 8.6z"
              />
              <path className="sst61" d="M1114.4 769.5c6.1-1.2 12.6-3.2 19.4-6.2" />
              <g className="sst62">
                <path
                  className="sst17"
                  d="M1076.5 766.2c.4.2.5.2.7.3 1 .4 1 .4 2.3.7l.4.1-.6 2.3-.3-.1c-1.4-.4-1.5-.4-2.6-.8-.2-.1-.5-.2-.9-.3l1-2.2z"
                />
              </g>
              <g className="sst130">
                <path
                  d="m1006.7 745.1 29-7.4s3.2 4.6 10 10.8"
                  style={{
                    fill: "#a9e4ff",
                  }}
                />
                <path
                  className="sst17"
                  d="M1045 749.8c-5.2-4.8-8.7-8.9-9.9-10.5l-28 7.2c-.8.2-1.6-.3-1.8-1-.2-.8.3-1.6 1-1.8l29-7.4c.6-.1 1.2.1 1.5.6 0 0 3.2 4.6 9.8 10.6.1 0-1.3 2.5-1.6 2.3z"
                />
              </g>
              <path className="sst7" d="m1034.9 771.6 2.6-96.7" />
              <g className="sst62">
                <path
                  className="sst58"
                  d="m1040.2 760.6 16.3-26.9 22.6 9.8-15.9 28.6zM1079.1 743.5l2.2 9.4-12.5 26.2-5.6-7z"
                />
                <path className="sst58" d="m1040.2 760.6 6.5 7.6 22.1 10.9-5.6-7z" />
              </g>
              <g className="sst62">
                <path
                  className="sst58"
                  d="m1077.9 780.4 8.1-30.4 24.4 3.1-7.2 32z"
                />
                <path className="sst58" d="m1110.4 753.1 4.7 8.4-4.5 28.6-7.4-5z" />
                <path className="sst58" d="m1077.9 780.4 8.4 5.5 24.3 4.2-7.4-5z" />
              </g>
              <path
                className="sst190"
                d="M1053.4 741c-2.9-1.5-6.5 3.7-2.2 4.5 2.5 0 3.7 4.6-.6 4.3M1057.2 743.7c-1 3.1 3.8 7.8 5.1 1.6.4-1.7-4.2-4.6-5.1-1.6zM1066.5 740.8c0 2.7.2 5.5.6 8.2M1075.9 738.8c-.7 2.8.3 5.7.3 8.6-4.6-10.2-8.3 5.2-.3.7M1073.6 757.5c-3.1 0-2.6 6.5.8 5.9 4-.7 2.9-5.9-.8-5.9zM1080.8 757.7c-2.3 5 4.2 10.4 6.3 1.1M1090.3 759.1c1.3.1 5.2.7 6.8.9"
              />
              <path className="sst190" d="M1094 756.6c-.7 2.8-1.3 5.6-1.8 8.5" />
              <path className="sst187" d="m1063.1 646.7 15.2 8.6 17-24.2-26.2 8z" />
              <path className="sst63" d="m1059.2 640.8.4 4.4 3.5 1.5 2.7-3.5z" />
              <path className="sst63" d="m1059.2 640.8 4.7-3.5 5.2 1.8-3.3 4.1z" />
              <path
                className="sst34"
                d="M1105.9 624.5c11.9-7.3 9.3-20.7 9.3-20.7l-13.4-.4-3.6 5.8-3.2-5.9-13.3-.4s-3.3 13.3 8.2 21.2c-9.2 4.3-16.1 15.8-16.4 26.5-.2 6.9 11.5 12.6 23.3 12.9 11.9.3 23.8-4.8 24-11.7.3-10.7-5.9-22.5-14.9-27.3z"
              />
              <path
                className="sst7"
                d="M1086.4 637c-.8 1.4-1.5 3.2-.6 4.5.7 1 2.2 1.2 3.3.8 1.1-.4 2.1-1.3 2.9-2.1.5 1.5 1.4 3.3 3.1 3.3s2.7-1.8 3.3-3.4c.4 1.6 2 2.7 3.6 2.7 1.6-.1 3.2-1.3 3.5-2.9.9.8 2.1 1.5 3.3 1.2 1.2-.3 2.2-1.7 1.5-2.7M1082.6 645.4c-2.1 1-2.7 4.1-1.3 5.8 1.5 1.7 4.7 1.5 5.9-.4-.7 2 1 4.3 3.1 4.5s4.2-1.2 5-3.2c.3 1.6 2 2.8 3.6 2.7s3.1-1.7 3.1-3.3c1.2 1.3 2.7 2.5 4.5 2.7s3.8-1 4-2.8c.7 1.3 2.7 1.2 3.6.1.9-1.1.8-2.8.2-4.1M1091.3 629.9c-.7.7-.9 1.8-.5 2.6s1.4 1.3 2.3 1.2c1-.2 1.7-1 2.4-1.7.6 1 1.6 2 2.7 2.1s2.5-.8 2.4-2c.9.6 2 1 3 .8 1-.3 1.9-1.4 1.5-2.4M1086.4 604.2c-.1 1.8.3 3.7 1.4 5.1M1090.7 603.8c.1 1.4.6 2.9 1.3 4.1M1110.1 604.8c0 1.8-.5 3.6-1.7 5M1105.7 604.2c-.2 1.4-.7 2.9-1.5 4"
              />
              <path
                className="sst187"
                d="m1104.1 662.2 10.7 4.4 7.3-1.7-.7-11.7c-.3-5.3-4.9-9.4-10.2-9-2 .1-4.2.7-6.6 1.8-.9.5-1.8.9-2.5 1.5-5.3 3.9-4.1 12.2 2 14.7z"
              />
              <path className="sst63" d="m1123.8 664.9-.3 3.7-6.7 1.5-1.5-3.6z" />
              <path className="sst63" d="m1121.5 662 2.3 2.9-8.5 1.6.2-3.2z" />
              <path
                className="sst187"
                d="m1075.9 663.3-2-10.6c-.5-2.9.8-5.9 3.4-7.4 3.3-1.9 10.8-1.6 13.5 1.8 3 3.7 2.9 8.3-.9 11.4l-8.7 7.3-5.3-2.5z"
              />
              <path
                className="sst63"
                d="m1073.2 664.7-.1 3.7 6.6 2 1.8-3.4zM1075.8 662l-2.6 2.7 8.3 2.3.1-3.2z"
              />
              <path
                className="sst12"
                d="m995.1 699.9-2.2 83.2M963.2 708.7l-2.2 83.2"
              />
              <path className="sst8" d="m954.8 726.6.1 6.4-20.3 6.1.2-6.6z" />
              <path className="sst34" d="m974.4 720.8-.1 6.3-19.4 5.9.2-6.6z" />
              <path className="sst8" d="m993.8 714.8-.2 6.4-19.3 5.9.2-6.6z" />
              <path className="sst34" d="m1012.1 709.4-.2 6.4-18.3 5.5.2-6.7z" />
              <path className="sst8" d="m1029.3 703.8-.3 6.5-16.6 5.3.2-7z" />
              <path
                className="sst34"
                d="m1046.7 699.4-.1 5.5-17.5 5.4.2-7.1zM912.3 706.8l22.5 25.7 20-5.9-20.8-25.5z"
              />
              <path className="sst8" d="m934 701.1 20.8 25.5 19.4-5.7-20.5-25z" />
              <path
                className="sst34"
                d="m953.7 695.9 20.5 25 19.5-5.7-20-24.5zM1009.7 681.3l-17.4 4.5 19.6 24 17-5z"
              />
              <path
                className="sst8"
                d="m1046.7 699.5-21.1-22.4-15.9 4.2 19.2 23.5zM973.7 690.7l20 24.5 18.2-5.4-19.6-24z"
              />
              <path
                className="sst7"
                d="m912.3 756.3 16.6-15.7M936.3 764.6l15.7-14.9M931.3 776.9l20.7-19.6M1013.8 738.5l21.6-20.5M912.3 764.1l10.8-10.3M1002.7 761.2l16.6-15.7M1002.6 768.9l10.9-10.2"
              />
              <path
                className="sst191"
                d="M1003.9 802.7c.1 1-.5 5.9 2.1 6.4 1.8.3 8 .5 8.2-1.5.2-1.7-1.5-2.1-2.3-2.3-.8-.3-1.5-.6-1.2-2.6M990.9 801.9c.1 1-1 5.4 1.4 6.5 2.2 1 8.4 1.1 8.7-.8.2-1.7-1.3-2.8-2.1-3.1s-1.5-.6-1.2-2.6"
              />
              <path
                d="M1011.1 791.2c.1.9.7 1.6 1.4 2 .8.4 1.6.5 2.5.4.8-.1 1.8-.5 1.9-1.4.1-.3 0-.7.2-.9s.5-.2.7-.4c.4-.3.3-1.1 0-1.5-.5-1-1.4-2.1-2.6-2.1-1.5-.1-3 .3-4.1 1.4-.4.4-.7.9-.7 1.4"
                style={{
                  fill: "#e09539",
                  stroke: "#222",
                  strokeWidth: 1.4047,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="M1010.4 791.1c.1 0 .2.1.4.1s.3-.3.4-.5c.8-1.4 2.2-2.2 3.4-3.2.2-.2.4-.3.5-.6v-.5c-.6-2.1-2.8-5.3-5.4-4.8-2.7.6-3.4 4.3-2.4 6.6.6 1.3 1.7 2.4 3.1 2.9z"
                style={{
                  fill: "#fffefd",
                  stroke: "#222",
                  strokeWidth: 1.4047,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="m988.4 791.9.2 8.8c0 2.2 1.8 4.1 4.2 4.5 1.2.2 2.5.2 4-.1 1.5-.4 2.6-1.4 2.9-2.8l1.3-3.6 1.3 2.6c.6 2.1 2.7 3.6 5.1 3.3.6-.1 1.3-.2 2-.4 1.7-.6 2.8-2.1 2.5-3.8l-4.4-25.5-16.4 3.3-2.7 13.7z"
                style={{
                  fill: "#1313bf",
                  stroke: "#222",
                  strokeWidth: 1.3547,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="M994.2 790.5s9.3 1.1 12.9-.2c0 0 2.1 4.9-4.7 5.7-8.3.9-8.2-5.5-8.2-5.5z"
                style={{
                  fill: "#1313bf",
                  stroke: "#222",
                  strokeWidth: 1.2264,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                className="sst168"
                d="M1014 774v-1c0-.6-.1-1.3-.2-1.9l-.2-1c-.4-2-.9-3.3-.9-3.4v-.2c2-6 .2-9.3-.6-10.5-.2-.3-.5-.4-.8-.4-4.1-.3-6.4 2.3-6.4 2.3s.1 2.9.1 3.6c-.1-.1-.6-3.3-.8-3.7l-.2-.3-.1.4c-.4.9-1.9 2.3-2.4 2.7 0-.5-.1-1.7-.8-2.8l-.3-.4-.1.5c-.1.7-1.1 2.8-1.5 3.4-.8-1.9-1.4-2.6-1.8-2.9l-.3-.3-1.1 4.6c-1.6-3.1-3.6-4.7-6-5.9-2-.9-3.7-1-4.8-.9-.6.1-1 .4-1.2.9-2.1 5.1 1.8 10.1 1.8 10.1.1.1.1.2 0 .3 0 0-.5 1.3-.9 3.3l-.2.9c-.1.8-.2 1.5-.2 2.2v1c0 .7.1 1.5.2 2.1l.2.9c.2.7.5 1.4.8 1.9.5.9 1.1 1.9 2.1 2.3.6.3 1.9 2.7 11.5 2.9 1.3 0 8.2-.6 8.2-.6s1.7-1 2.7-1.7c1.2-.8 2.1-1.9 2.8-3.2.3-.7.6-1.4.8-2.2l.2-.7v-.2c.3-.5.4-1.3.4-2.1z"
              />
              <path
                d="M1014 774v-1c0-.6-.1-1.3-.2-1.9l-.2-1c-.4-2-.9-3.3-.9-3.4v-.2c2-6 .2-9.3-.6-10.5-.2-.3-.5-.4-.8-.4-4.1-.3-6.4 2.3-6.4 2.3s.1 2.9.1 3.6c-.1-.1-.6-3.3-.8-3.7l-.2-.3-.1.4c-.4.9-1.9 2.3-2.4 2.7 0-.5-.1-1.7-.8-2.8l-.3-.4-.1.5c-.1.7-1.1 2.8-1.5 3.4-.8-1.9-1.4-2.6-1.8-2.9l-.3-.3-1.1 4.6c-1.6-3.1-3.6-4.7-6-5.9-2-.9-3.7-1-4.8-.9-.6.1-1 .4-1.2.9-2.1 5.1 1.8 10.1 1.8 10.1.1.1.1.2 0 .3 0 0-.5 1.3-.9 3.3l-.2.9c-.1.8-.2 1.5-.2 2.2v1c0 .7.1 1.5.2 2.1l.2.9c.2.7.5 1.4.8 1.9.5.9 1.1 1.9 2.1 2.3.6.3 1.9 2.7 11.5 2.9 1.3 0 8.2-.6 8.2-.6s1.7-1 2.7-1.7c1.2-.8 2.1-1.9 2.8-3.2.3-.7.6-1.4.8-2.2l.2-.7v-.2c.3-.5.4-1.3.4-2.1z"
                style={{
                  fill: "#e09539",
                }}
              />
              <path
                className="sst197"
                d="M985 767.4c-.4 1.2-.8 2.5-1.1 3.8-.2 1.3-.4 2.5-.3 3.8 0 .9.2 1.8.4 2.7s.6 1.8 1.1 2.6c.6 1 1.4 1.9 2.4 2.6.2.1.3.1.5.2.1.1.4.3.5.2.2 0 1.4.3 1.5.2.1-.2-1.2-1.3-1.3-1.5-.1-.1-.2-.1-.3-.2l.1.1c-.7-.6-1.4-1.3-2-2.1l.1.1c-.4-.6-.8-1.2-1.1-1.9 0 .1 0 .1.1.2-.3-.8-.5-1.7-.6-2.6v.2c-.1-1.3-.1-2.6.1-4v.2c.2-1.5.7-2.9 1.1-4.3.1-.4-.1-.8-.5-.9-.1 0-.5.2-.7.6z"
              />
              <path
                className="sst197"
                d="M983.7 755.6c-.6.6-.9 1.4-1 2.2-.1.4-.1.8-.1 1.3 0 .4 0 .7.1 1.1.1.8.1 1.7.3 2.5.1.4.2.7.3 1.1l.6 1.2c.4.9.9 1.8 1.5 2.6.1.1.3.2.5.2s.4-.1.5-.2c.1-.1.2-.3.2-.5v-.2c0-.1-.1-.2-.2-.3l-.1-.1.1.1c-.4-.5-.7-1.1-1-1.7-.1-.3-.3-.6-.4-.9-.1-.3-.3-.6-.4-.8 0 .1 0 .1.1.2-.3-.8-.4-1.6-.5-2.4v.2c-.1-1-.2-2.1-.1-3.1v.2l.3-1.2c0 .1-.1.1-.1.2.1-.2.2-.4.4-.6l-.1.1c0-.1.1-.1.1-.2.3-.3.3-.7 0-1-.2-.2-.7-.2-1 0zM996.5 762.9c.3-.2.4-.5.6-.8.2-.4.3-.8.4-1.2.2-.7.3-1.5.4-2.2v-.7c0-.2-.2-.4-.3-.4-.2-.1-.4-.1-.6-.1-.2.1-.3.2-.4.3-.1.2-.1.4-.1.6v-.2.5c0 .3-.1.6-.1.9v-.2c-.1.7-.3 1.4-.6 2.1 0-.1.1-.1.1-.2-.1.2-.2.3-.3.5l.1-.1-.2.2c-.1.1-.2.3-.2.5s.1.4.2.5c.1.1.3.2.5.2s.3 0 .5-.2zM1000 761.3c.3-.6.5-1.3.8-1.9.3-.7.5-1.4.4-2.2-.1-.4-.5-.6-.9-.5s-.6.5-.5.9v.2-.2.5-.2c-.1.5-.3 1-.5 1.5l-.6 1.5c-.1.2 0 .4.1.6.1.2.2.3.4.3s.4 0 .6-.1c0-.1.1-.2.2-.4zM1002.5 761.2c1-.9 1.7-2.1 2.2-3.3.1-.2 0-.4-.1-.6-.1-.2-.2-.3-.4-.3-.4-.1-.8.1-.9.5-.1.2-.1.3-.2.5 0-.1.1-.1.1-.2-.3.7-.7 1.3-1.1 1.8l.1-.1c-.2.2-.4.5-.6.7-.3.3-.3.7 0 1 .1.3.6.3.9 0z"
              />
              <path
                className="sst197"
                d="M1005.5 759c.1-.2.2-.3.3-.4l-.1.1c.2-.2.4-.4.7-.6l-.1.1c.5-.4 1.2-.7 1.8-.9-.1 0-.1 0-.2.1.8-.3 1.7-.6 2.6-.7.2 0 .3-.1.5-.1h-.2.3c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-.5c-.2 0-.3 0-.5.1-.4.1-.9.2-1.3.3-.6.2-1.2.4-1.7.6-.5.2-1 .5-1.4.8-.5.4-1 .8-1.3 1.4-.1.2-.1.3-.1.6 0 .2.2.4.3.4.2.1.4.1.6.1 0-.2.2-.3.3-.5z"
              />
              <path
                className="sst198"
                d="M984.8 756.7c.7 0 1.3 0 2 .1h.1c.1 0-.1 0 0 0h.2c.2 0 .3.1.5.1.3.1.6.2.8.3.1 0 .3.1.4.2.1 0 .1.1.2.1h.1c.1 0-.1 0 0 0 .3.1.5.2.7.4.5.3.9.6 1.3.9.1 0 .1.1.1.1.1.1-.1-.1 0 0 0 0 .1 0 .1.1l.3.3c.2.2.4.3.5.5.3.3.6.7.9 1 .1.2.3.3.4.5l.1.1v.1s.1.1 0-.1c.1.1.1.2.2.2.2.3.4.5.5.8.2.3.3.6.5.9.1.2.4.3.6.2.2-.1.3-.4.2-.6-.1-.3-.3-.5-.4-.7-.4-.6-.8-1.3-1.3-1.8-.6-.8-1.3-1.5-2-2.1-.9-.8-1.9-1.4-3-1.8-1.2-.5-2.5-.7-3.8-.7h-.5c-.1 0-.2 0-.3.1s-.2.2-.1.3c.2.3.4.6.7.5zM1011.5 756.4c.2.3.3.6.5.9 0 .1.1.2.1.3v-.1.1c0 .1 0 .1.1.2.1.3.2.5.2.8.1.3.1.6.2.9 0 .2.1.4.1.5v.5c.1.8 0 1.7 0 2.5v.7c0-.1 0 0 0 0V764c0 .1 0 .3-.1.4-.1.5-.3 1.1-.4 1.6-.1.3-.2.6-.2.8v.1c.1.4.2.8.4 1.1.2.7.4 1.4.5 2.1.1.4.1.9.2 1.3v.2s0 .1 0 0v1.1c0 1 0 2-.1 3.1v.1c0 .1 0-.1 0 0v.2c0 .1 0 .3-.1.4-.1.3-.1.5-.2.8-.1.3-.2.5-.3.8 0 .1-.1.2-.1.4 0 .1-.1.1-.1.2v.1c.1-.2 0-.1 0 0-.2.5-.5 1-.8 1.4l-.3.3-.1.1c-.1.1.1-.1 0 0 0 .1-.1.1-.2.2l-.6.6c-.2.2-.5.4-.7.6-.1 0-.1.1-.2.1-.1.1 0 0 .1 0l-.1.1c-.1.1-.3.2-.4.3-.3.2-.6.3-.9.5-.2.1-.3.2-.5.2-.1 0-.2.1-.2.1h-.1s-.2.1-.1 0h-.2c-.1 0-.2.1-.3.1-.2.1-.4.1-.5.2-.3.1-2.7 1.1-2.6 1.4.1.3 2.6-.1 2.9-.2 2-.6 3.9-1.6 5.2-3.2 1.1-1.3 1.9-2.9 2.3-4.6.3-1.6.4-3.2.3-4.7-.1-1.3-.3-2.6-.6-3.9l-.3-1.2c-.1-.2-.1-.4-.2-.6v.3c.7-1.9 1-3.9.9-5.9-.1-1.4-.4-2.7-.9-3.9-.2-.4-.3-.7-.5-1.1-.2-.3-.5-.4-.8-.2-.3 0-.5.3-.3.6z"
              />
              <path
                className="sst171"
                d="M995.6 762.3s1.3-2.2.8-4.1c0-.2.1-.3.2-.3.4 0 1.3.5 2.6 3.5M1001.8 761s.1-2.3-1.3-4c-.1-.1-.3 0-.3.1 0 .8-.2 2.7-1.3 3.2"
              />
              <path
                className="sst171"
                d="M1001.8 760.2s1.4-1.1 1.9-2.5c.1-.2.4-.3.6-.1.3.4.6 1.3.7 3.8"
              />
              <path
                className="sst171"
                d="M1004.9 757.8s2.2-2.6 6.5-2.3c.4 0 .8.2 1 .6.9 1.2 2.7 4.7.7 10.8 0 0 5.5 15-6.3 17.6-3.1.7-5.2.6-7.9.5-3.2-.1-7.2-.9-7.4-1-11.8-2.5-6.2-16.8-6.2-16.8s-4.1-5.2-1.9-10.4c.3-.6.8-1.1 1.5-1.1 2.2-.2 7.4.1 11.2 7.5"
              />
              <path
                className="sst171"
                d="M981.1 768.4s1.9 3.5 5.7 2.6M980.5 772.6s2.8 2.8 6.2 1.1"
              />
              <path
                className="sst183"
                d="M992.5 771.5c-3.1-.9-2.7 5.4.3 3.3.1-.1.3 0 .4.1.1.3.4.5.7.6 1.9.3 1.7-1.4 2-1l.1.1c.5.3 1.1.3 1.6.1 1.2-.6 1.1-1.7.4-2.1-.1-.1-.1-.2-.1-.4.3-1.5-1.6-1.9-2.3-.8-.2.3-.4-.8-1.5-.9-1.4-.1-1.3 1.1-1.6 1zM1009 771.6c3.1-.7 2.4 5.6-.5 3.3-.1-.1-.3-.1-.4.1-.2.3-.4.5-.7.6-1.9.2-1.6-1.5-2-1.1l-.1.1c-.5.3-1.1.2-1.6 0-1.1-.6-1-1.7-.3-2.1.1-.1.1-.2.1-.4-.2-1.5 1.7-1.8 2.3-.7.2.4.4-.8 1.6-.8 1.4 0 1.3 1.1 1.6 1z"
              />
              <path
                className="sst171"
                d="M980.7 776.9s3.5 1.4 5.9-.5M997 769.8l-.1 2.8M1004.5 769.9l-.1 2.8"
              />
              <path
                className="sst17"
                d="M1001.6 775.7h-1.4c-.6 0-1-.5-1-1.1 0-.6.5-1 1.1-1h1.4c.6 0 1 .5 1 1.1 0 .6-.5 1-1.1 1z"
              />
              <path
                className="sst26"
                d="M1001.7 774.5h-.6c-.1 0-.2-.1-.2-.2s.1-.2.2-.2h.6c.1 0 .2.1.2.2s-.1.2-.2.2z"
              />
              <path
                className="sst171"
                d="M996.8 775.7s2.3 3.2 4.2-.5c0 0 1.6 3.8 4.4.7"
              />
              <path
                className="sst173"
                d="M1010.8 758.2s.8.7.4 1.9c0 0-.7 2.9-1.3 3.1l-2.3-.8.1-.9 1.2-1.8s.4-.9 1.9-1.5z"
              />
              <path
                className="sst171"
                d="M1011 758.3s.9 1.8-.8 5M1008.6 760.1s-.9.7-1.2 2.2M1011.2 765.1s-1.4-2.5-5-2.9"
              />
              <path
                className="sst173"
                d="M986.3 758.5s-1.3.9-.9 2.5c0 0 1.4 3.4 2.2 3.7l2.8-1.1-.2-1.2-1.5-2.2c0 .1-.6-1-2.4-1.7z"
              />
              <path
                className="sst171"
                d="M986 758.5s-2.3 1.8 1.3 6.1M988.7 760.5s1.4.6 1.7 2.5M986.9 766.1s.6-2.5 5.6-3M1012.2 771.2s2.5-.1 4.3-2.9M1012.6 773.4s2.4.9 4.6-1.1M1012.5 776.1s1.6 1.9 4.5.8"
              />
              <path
                d="M990.3 793.4c.1.9.7 1.6 1.4 2 .8.4 1.7.5 2.5.4s1.8-.5 2-1.4c.1-.3 0-.7.2-.9s.5-.2.7-.4c.4-.3.3-1.1 0-1.5-.6-1-1.5-2.1-2.6-2.1-1.5-.1-3.1.3-4.2 1.4-.4.4-.7.9-.7 1.4"
                style={{
                  fill: "#e09539",
                  stroke: "#222",
                  strokeWidth: 1.4167,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="M989.6 793.3c.1 0 .3.1.4.1.2 0 .3-.3.4-.5.8-1.4 2.2-2.2 3.5-3.2.2-.2.4-.3.5-.6v-.5c-.6-2.1-2.9-5.3-5.5-4.8-2.8.6-3.4 4.3-2.4 6.6.6 1.3 1.7 2.4 3.1 2.9z"
                style={{
                  fill: "#fffefd",
                  stroke: "#222",
                  strokeWidth: 1.4167,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                className="sst44"
                d="m1013.5 821.4 2.8-4.6-.1-15.3-5.2-2.8 11.7-12.3 5 2-1.6 17.3"
              />
              <path className="sst44" d="m1016.3 816.8 9.8-11.1 26.8.8-10.5 11.4z" />
              <g id="utjwek_2_">
                <path
                  className="sst201"
                  d="M1033.3 815.5c-.2 0-.5 0-.8-.1-1.3-.3-2.6-1-4-1.9-1.1-.7-2-1.6-2.7-2.7-1.7-2.2-2.5-4.8-2.2-7.5h-.2c-1.4 0-2.8-.3-4.2-1-.2-.1-.3-.2-.3-.4s0-.4.1-.5c.7-.7 1.5-1 2.2-1.2.4-.1.8-.2 1.3-.2.3-1 .9-1.9 1.7-2.6l.2-.2c.1-.1.4-.2.5-.2.2 0 .5.1.6.4.1.1.1.4.1.6.1 1 .3 2.5-.1 3.9 1.6.1 3 .8 4.1 1.5 1.9 1.3 3.4 3 4.5 5.3.7 1.6 1 3.1 1.1 4.7 0 .7-.2 1.3-.6 1.7-.2.1-.7.4-1.3.4z"
                />
                <path
                  className="sst17"
                  d="M1024.9 797.4c.1.1.1.3.1.4.2 1.4.3 2.8-.1 4.1-.1.2 0 .4.2.4 1.6 0 2.9.7 4.2 1.5 1.9 1.3 3.3 3 4.2 5 .6 1.4 1 2.9 1 4.5 0 1-.5 1.6-1.3 1.6-.2 0-.4 0-.6-.1-1.4-.3-2.6-1-3.7-1.8-1-.7-1.9-1.5-2.6-2.5-1.7-2.2-2.4-4.6-2.1-7.4 0-.4-.1-.4-.4-.4h-.5c-1.4 0-2.7-.4-4-1 .6-.6 1.3-.9 1.9-1.1.4-.1.8-.2 1.2-.2.2 0 .4-.1.5-.3.3-.9.8-1.8 1.5-2.5l.2-.2h.3m0-1.2s-.1 0 0 0c-.5 0-.8.2-1 .3-.1 0-.1.1-.2.2-.7.7-1.3 1.5-1.7 2.5-.3 0-.7.1-1 .2-.8.2-1.7.6-2.5 1.4-.3.3-.4.7-.3 1s.3.7.7.9c1.4.7 2.7 1 4.1 1.1-.1 2.7.7 5.1 2.4 7.3.8 1.1 1.7 2 2.9 2.8 1.4 1 2.8 1.6 4.1 2 .3.1.7.1.9.1.9 0 1.5-.4 1.8-.7.5-.5.7-1.2.7-2.1-.1-1.7-.4-3.4-1.1-5-1.2-2.4-2.7-4.3-4.7-5.6-1.1-.7-2.3-1.3-3.7-1.6.2-1.3.1-2.5 0-3.5 0-.4-.1-.6-.2-.8-.3-.2-.7-.5-1.2-.5z"
                />
              </g>
              <path className="sst44" d="m1027.8 788.4 31.4.9" />
              <g id="utjwek_1_">
                <path
                  className="sst201"
                  d="M1038.7 811.1c-.2 0-.5 0-.8-.1-1.3-.3-2.6-1-4-1.9-1.1-.7-2-1.6-2.7-2.7-1.7-2.2-2.5-4.8-2.2-7.5h-.2c-1.4 0-2.8-.3-4.2-1-.2-.1-.3-.2-.3-.4s0-.4.2-.5c.7-.7 1.5-1 2.2-1.2.4-.1.8-.2 1.3-.2.4-1 .9-1.9 1.7-2.6.1-.1.1-.1.2-.1.1-.1.4-.2.5-.2.2 0 .5.1.6.4.1.1.1.4.1.6.1 1 .3 2.5-.1 3.9 1.6.1 3 .8 4.1 1.5 1.9 1.3 3.4 3 4.5 5.3.7 1.6 1 3.1 1.1 4.7 0 .7-.2 1.3-.6 1.7-.3 0-.7.3-1.4.3z"
                />
                <path
                  className="sst17"
                  d="M1030.4 793c.1.1.1.3.1.4.2 1.4.3 2.8-.1 4.1-.1.2 0 .4.2.4 1.6 0 2.9.7 4.2 1.5 1.9 1.3 3.3 3 4.2 5 .6 1.4 1 2.9 1 4.5 0 1-.5 1.6-1.3 1.6-.2 0-.4 0-.6-.1-1.4-.3-2.6-1-3.7-1.8-1-.7-1.9-1.5-2.6-2.5-1.7-2.2-2.4-4.6-2.1-7.4 0-.4-.1-.4-.4-.4h-.5c-1.4 0-2.7-.4-4-1 .6-.6 1.3-.9 1.9-1.1.4-.1.8-.2 1.2-.2.2 0 .4-.1.5-.3.3-.9.8-1.8 1.5-2.5l.2-.2h.3m0-1.2c-.1 0-.1 0 0 0-.5 0-.8.2-1 .3-.1 0-.1.1-.2.2-.7.7-1.3 1.5-1.7 2.5-.3 0-.7.1-1 .2-.8.2-1.7.6-2.5 1.4-.3.3-.4.7-.3 1s.3.7.7.9c1.4.7 2.7 1 4.1 1.1-.1 2.7.7 5.1 2.4 7.3.8 1.1 1.7 2 2.9 2.8 1.4 1 2.8 1.6 4.1 2 .3.1.7.1.9.1.9 0 1.5-.4 1.8-.7.5-.5.7-1.2.7-2.1-.1-1.7-.4-3.4-1.1-5-1.2-2.4-2.7-4.3-4.7-5.6-1.1-.7-2.3-1.3-3.7-1.6.2-1.3.1-2.5 0-3.5 0-.4-.1-.6-.2-.8-.3-.2-.7-.5-1.2-.5z"
                />
              </g>
              <g id="utjwek_4_">
                <path
                  className="sst201"
                  d="M1043 807.3c-.5 0-1.2-.2-1.9-1.2-.8-1.1-1.3-2.5-1.7-4.1-.3-1.3-.4-2.6-.3-3.9.2-2.8 1.3-5.2 3.2-7.1-1.1-.9-1.9-2.1-2.6-3.7-.1-.2-.1-.5 0-.7s.3-.3.6-.4h.4c.9 0 1.6.3 2.1.5.4.2.7.4 1 .6 1-.5 2-.8 3-.9h.4c.2 0 .4.1.6.2.2.2.4.6.3.9-.1.2-.1.4-.3.6-.5.8-1.4 2-2.5 2.8 1.1 1.2 1.6 2.5 2 3.8.6 2.2.6 4.5-.1 7-.5 1.6-1.3 3.1-2.3 4.3-.7 1-1.3 1.3-1.9 1.3z"
                />
                <path
                  className="sst17"
                  d="M1040.7 787.1c.7 0 1.3.2 1.8.5.4.2.7.4 1 .6.1.1.2.1.3.1.1 0 .2 0 .3-.1.9-.5 1.8-.8 2.8-.8h.3s.1 0 .1.1-.1.3-.2.4c-.8 1.1-1.6 2.3-2.8 3-.2.1-.2.3-.1.4 1.2 1.1 1.8 2.4 2.2 3.9.6 2.2.5 4.4-.1 6.6-.5 1.5-1.2 2.9-2.2 4.1-.4.5-.8.7-1.2.7-.4 0-.9-.3-1.3-.8-.8-1.2-1.3-2.5-1.6-3.8-.3-1.2-.4-2.4-.3-3.6.2-2.7 1.2-5 3.3-6.9.3-.2.2-.3 0-.6-1.3-1-2.1-2.2-2.7-3.7.2-.1.3-.1.4-.1m0-1.5h-.5c-.5 0-.9.3-1.1.7s-.3.9-.1 1.3c.6 1.4 1.3 2.5 2.2 3.4-1.8 1.9-2.7 4.3-2.9 7-.1 1.3 0 2.7.4 4.1.4 1.7 1 3.1 1.8 4.3.9 1.2 1.8 1.5 2.5 1.5.6 0 1.5-.2 2.3-1.2 1.1-1.4 1.9-2.9 2.5-4.6.8-2.7.8-5.1.2-7.4-.3-1.1-.8-2.4-1.6-3.5.9-.8 1.6-1.8 2.1-2.5.3-.3.4-.6.4-.8.2-.6 0-1.3-.5-1.7-.3-.3-.6-.4-1-.4h-.4c-1 0-2 .3-2.9.7-.2-.2-.5-.3-.8-.4-.9-.2-1.7-.5-2.6-.5z"
                />
              </g>
              <g id="utjwek_3_">
                <path
                  className="sst201"
                  d="M1043 807.1c-.6 0-1.2-.4-1.8-1.1-.7-1.1-1.3-2.4-1.7-4-.3-1.3-.4-2.5-.3-3.8.2-2.8 1.3-5.2 3.3-7.1-1.1-.9-2-2.1-2.7-3.7-.1-.2-.1-.4 0-.5.1-.2.3-.3.5-.3h.4c.8 0 1.5.3 2.1.5.4.2.8.4 1.1.6.9-.5 2-.8 3-.9H1047.2c.1 0 .4.1.5.2.2.2.3.5.2.7 0 .1-.1.4-.3.6-.6.9-1.4 2-2.6 2.9 1.1 1.2 1.7 2.6 2.1 3.8.6 2.2.6 4.5-.1 6.9-.5 1.6-1.2 3-2.3 4.3-.6.6-1.1.9-1.7.9z"
                />
                <path
                  className="sst17"
                  d="M1040.7 787.1c.7 0 1.3.2 1.8.5.4.2.7.4 1 .6.1.1.2.1.3.1.1 0 .2 0 .3-.1.9-.5 1.8-.8 2.8-.8h.3s.1 0 .1.1-.1.3-.2.4c-.8 1.1-1.6 2.3-2.8 3-.2.1-.2.3-.1.4 1.2 1.1 1.8 2.4 2.2 3.9.6 2.2.5 4.4-.1 6.6-.5 1.5-1.2 2.9-2.2 4.1-.4.5-.8.7-1.2.7-.4 0-.9-.3-1.3-.8-.8-1.2-1.3-2.5-1.6-3.8-.3-1.2-.4-2.4-.3-3.6.2-2.7 1.2-5 3.3-6.9.3-.2.2-.3 0-.6-1.3-1-2.1-2.2-2.7-3.7.2-.1.3-.1.4-.1m0-1.2h-.4c-.4 0-.7.3-.9.6-.2.3-.2.7-.1 1.1.6 1.4 1.4 2.6 2.3 3.5-1.8 1.9-2.8 4.3-3 7.1-.1 1.3 0 2.7.3 4 .4 1.6 1 3.1 1.8 4.2s1.7 1.4 2.2 1.4 1.3-.2 2.1-1.1c1.1-1.3 1.9-2.8 2.4-4.5.7-2.6.8-5 .1-7.3-.4-1.2-.9-2.5-1.8-3.6 1-.8 1.7-1.9 2.2-2.6.2-.3.3-.6.4-.7.2-.5 0-1-.4-1.3-.1-.1-.4-.3-.9-.3h-.5c-1 0-2 .3-2.9.8-.3-.2-.6-.4-.9-.5-.3-.5-1.1-.8-2-.8z"
                />
              </g>
              <path
                className="sst44"
                d="m1059.5 789.3-12.5 13.4-30.8-1.2 11.5-13.1M1047 802.7l-4.6 15.2 1 3.8M1059.5 789.3l-6.6 17.2 2 3"
              />
              <ellipse
                transform="rotate(-47.484 1043.53 823.85)"
                className="sst202"
                cx={1043.5}
                cy={823.9}
                rx={1.9}
                ry={1.6}
              />
              <ellipse
                transform="rotate(-47.484 1055.107 810.888)"
                className="sst202"
                cx={1055.1}
                cy={810.9}
                rx={1.9}
                ry={1.6}
              />
              <ellipse
                transform="rotate(-47.484 1012.906 822.875)"
                className="sst202"
                cx={1012.9}
                cy={822.9}
                rx={1.9}
                ry={1.6}
              />
              <path className="sst7" d="m1008.5 801.4 17-18.1" />
              <defs>
                <path
                  id="SVGID_00000054967360067822832870000005560655264753663897_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000081643529341551904680000002072911072031041164_">
                <use
                  xlinkHref="#SVGID_00000054967360067822832870000005560655264753663897_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000081643529341551904680000002072911072031041164_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1013 816.4 29.7-25.9"
              />
              <defs>
                <path
                  id="SVGID_00000166666458758615661030000017655228485369315223_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000180355948540695026970000002670664605464016813_">
                <use
                  xlinkHref="#SVGID_00000166666458758615661030000017655228485369315223_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000180355948540695026970000002670664605464016813_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1008.2 816.3 33.5-27.4"
              />
              <defs>
                <path
                  id="SVGID_00000054985158552874752250000003289481240633035936_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000165211473605966489690000003672675938748367506_">
                <use
                  xlinkHref="#SVGID_00000054985158552874752250000003289481240633035936_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000165211473605966489690000003672675938748367506_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1003.5 816.1 33.4-27.3"
              />
              <defs>
                <path
                  id="SVGID_00000045589399225788749540000014708877881809390493_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000126291536230900652260000011934753296112957375_">
                <use
                  xlinkHref="#SVGID_00000045589399225788749540000014708877881809390493_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000126291536230900652260000011934753296112957375_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m998.7 816 33.4-27.4"
              />
              <defs>
                <path
                  id="SVGID_00000158000110735166834390000012561730195149717393_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000180361998350047205980000010299231794086222494_">
                <use
                  xlinkHref="#SVGID_00000158000110735166834390000012561730195149717393_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000180361998350047205980000010299231794086222494_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1032.1 817 33.4-27.4"
              />
              <defs>
                <path
                  id="SVGID_00000165938637464254368360000005411181511336773014_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000164491933028635371050000005335690086045148597_">
                <use
                  xlinkHref="#SVGID_00000165938637464254368360000005411181511336773014_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000164491933028635371050000005335690086045148597_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1036.9 817.1 33.4-27.3"
              />
              <defs>
                <path
                  id="SVGID_00000146460439965614855670000010624136397072680881_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000144327795104484374030000009111437614987436424_">
                <use
                  xlinkHref="#SVGID_00000146460439965614855670000010624136397072680881_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000144327795104484374030000009111437614987436424_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1027.4 816.8 33.3-27.3"
              />
              <defs>
                <path
                  id="SVGID_00000167359853077198723800000014409095573523919266_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000083071350863883564170000007033605934080575873_">
                <use
                  xlinkHref="#SVGID_00000167359853077198723800000014409095573523919266_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000083071350863883564170000007033605934080575873_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1022.6 816.7 33.4-27.4"
              />
              <defs>
                <path
                  id="SVGID_00000044162459269077295320000001464526336783452292_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000006678468401902784000000018103681068355139253_">
                <use
                  xlinkHref="#SVGID_00000044162459269077295320000001464526336783452292_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000006678468401902784000000018103681068355139253_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1017.8 816.6 33.4-27.4"
              />
              <defs>
                <path
                  id="SVGID_00000121979013682940911000000005035605639003501701_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000150824433391630142950000004298811265088432783_">
                <use
                  xlinkHref="#SVGID_00000121979013682940911000000005035605639003501701_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000150824433391630142950000004298811265088432783_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1061.5 817.8-22.1-29"
              />
              <defs>
                <path
                  id="SVGID_00000034806736265092333160000006768441815961961606_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000039135540224444983770000003318390227855209861_">
                <use
                  xlinkHref="#SVGID_00000034806736265092333160000006768441815961961606_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000039135540224444983770000003318390227855209861_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1066.3 818-19.5-25.3"
              />
              <defs>
                <path
                  id="SVGID_00000039124198777227159160000001182208136341614740_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000124849743597957994880000007511007030322478743_">
                <use
                  xlinkHref="#SVGID_00000039124198777227159160000001182208136341614740_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000124849743597957994880000007511007030322478743_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1071.1 818.1-22.2-29"
              />
              <defs>
                <path
                  id="SVGID_00000038375661943323677080000005228980240747164843_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000127043096081208723200000009106509177933927554_">
                <use
                  xlinkHref="#SVGID_00000038375661943323677080000005228980240747164843_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000127043096081208723200000009106509177933927554_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1075.9 818.3-22.2-29"
              />
              <defs>
                <path
                  id="SVGID_00000032650340976967469730000003600281691102845104_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000151508207430683365300000016875606181710354068_">
                <use
                  xlinkHref="#SVGID_00000032650340976967469730000003600281691102845104_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000151508207430683365300000016875606181710354068_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1042.5 817.3-22.2-29"
              />
              <defs>
                <path
                  id="SVGID_00000127008004825909650180000002501200259686828937_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000057860513982946294240000017421430633007446456_">
                <use
                  xlinkHref="#SVGID_00000127008004825909650180000002501200259686828937_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000057860513982946294240000017421430633007446456_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1037.7 817.1-22.2-29"
              />
              <defs>
                <path
                  id="SVGID_00000090977828275635287180000008654298841918216628_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000088091791068982776840000004028712576474989971_">
                <use
                  xlinkHref="#SVGID_00000090977828275635287180000008654298841918216628_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000088091791068982776840000004028712576474989971_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1033 817-22.2-29"
              />
              <defs>
                <path
                  id="SVGID_00000021819145628054057870000008688606935685612973_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000142143792948358081150000006999414272791718041_">
                <use
                  xlinkHref="#SVGID_00000021819145628054057870000008688606935685612973_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000142143792948358081150000006999414272791718041_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1027.8 816.8-22.1-29"
              />
              <defs>
                <path
                  id="SVGID_00000018227830861149242140000001912801040177823649_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000094589226209267628050000007736888570403111097_">
                <use
                  xlinkHref="#SVGID_00000018227830861149242140000001912801040177823649_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000094589226209267628050000007736888570403111097_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1021.9 816.7-22.2-29"
              />
              <defs>
                <path
                  id="SVGID_00000159439155414443189410000005081704012831612591_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000003804030628721758410000002280729657143445400_">
                <use
                  xlinkHref="#SVGID_00000159439155414443189410000005081704012831612591_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000003804030628721758410000002280729657143445400_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1047.2 817.4-22.2-29"
              />
              <defs>
                <path
                  id="SVGID_00000040555078432791822550000014221330399938685844_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 10.9-11.1 6.5-16.9-31.3-1.2z"
                />
              </defs>
              <clipPath id="SVGID_00000018197697613816087710000015196878730722285193_">
                <use
                  xlinkHref="#SVGID_00000040555078432791822550000014221330399938685844_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000018197697613816087710000015196878730722285193_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1052 817.6-22.2-29"
              />
              <defs>
                <path
                  id="SVGID_00000102514538801499094990000008395990689020246400_"
                  d="m1016.2 801.4.2 14.9 25.6 1.3 11-11.1 6.4-16.9-12.6-.5.1.1s-3.6 13.2-6.1 12.8c-4.9-.9 1.4-10.5 1.4-10.5l-1.6-2.6-12.4-.5-12 13z"
                />
              </defs>
              <clipPath id="SVGID_00000164484481813144779870000010693080737501822871_">
                <use
                  xlinkHref="#SVGID_00000102514538801499094990000008395990689020246400_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000164484481813144779870000010693080737501822871_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1056.8 817.7-22.2-29"
              />
              <g id="utjwek_5_">
                <path
                  className="sst201"
                  d="M1042.6 797.6c-.6 0-1.2 0-1.8-.1-1.3-.1-2.5-.5-3.7-1.1-2.6-1.2-4.4-3.1-5.5-5.6-1.2.7-2.7 1.1-4.4 1.2-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.1-.5.3-1 .8-1.6 1.4-2.1.3-.3.7-.6 1-.8-.2-1.1-.1-2.1.2-3.1 0-.1.1-.2.1-.2.1-.2.2-.4.4-.5.1-.1.2-.1.4-.1.1 0 .3 0 .4.1s.3.2.4.5c.6.8 1.4 2.1 1.8 3.5 1-.4 2-.6 3.2-.6h1.1c2.3.2 4.4 1.1 6.4 2.6 1.3 1 2.4 2.2 3.2 3.7.4.7.5 1.4.2 1.9-.2.6-.8 1-1.6 1.2-.8.1-1.7.2-2.6.2z"
                />
                <path
                  className="sst17"
                  d="m1030 785 .3.3c.8 1.1 1.5 2.3 1.8 3.7 0 .1.1.3.2.3h.1c1.1-.6 2.2-.7 3.4-.7h1.1c2.3.2 4.3 1.1 6.1 2.5 1.2 1 2.2 2.1 3 3.5.6 1.1.2 1.9-1 2.2-.8.2-1.6.3-2.4.3-.6 0-1.2 0-1.7-.1-1.2-.1-2.4-.5-3.5-1-2.5-1.1-4.3-3-5.3-5.5-.1-.2-.1-.3-.3-.3-.1 0-.2 0-.3.1-1.4.8-2.8 1.2-4.4 1.2.2-.8.7-1.4 1.2-1.9.3-.3.6-.5.9-.7.2-.1.3-.3.2-.5-.1-1-.1-2 .2-2.9 0-.1.1-.2.1-.3.2-.1.2-.1.3-.2m0-1.2c-.2 0-.4.1-.6.2-.4.2-.6.5-.6.7 0 .1-.1.1-.1.2v.1c-.3.9-.4 2-.3 3-.3.2-.5.4-.8.7-.6.6-1.2 1.3-1.5 2.4-.1.4 0 .8.2 1.1s.6.5.9.5c1.5-.1 2.9-.4 4.1-.9 1.1 2.4 3 4.2 5.5 5.3 1.2.6 2.5 1 3.8 1.1.6.1 1.3.1 1.9.1 1 0 1.9-.1 2.7-.3 1.3-.3 1.8-1 2-1.5s.4-1.3-.2-2.5c-.9-1.5-2-2.8-3.3-3.8-2.2-1.6-4.4-2.5-6.7-2.7h-1.2c-1.1 0-2 .1-2.8.4-.4-1.2-1.1-2.3-1.7-3-.2-.3-.4-.5-.5-.6-.2-.4-.5-.5-.8-.5z"
                />
              </g>
              <g id="utjwek_6_">
                <path
                  className="sst201"
                  d="M1039.7 801.7c-.5 0-.9 0-1.4-.1-2.8-.3-5.2-1.5-7-3.5-1 1.1-2.2 1.9-3.8 2.5h-.2c-.1 0-.2 0-.3-.1-.2-.1-.3-.3-.3-.5-.1-1 .3-1.8.6-2.5.2-.4.4-.7.7-1.1-.5-.9-.8-2-.8-3v-.2c0-.2.1-.4.2-.5s.3-.2.5-.2h.2c.1.1.4.1.5.3.8.6 2 1.5 2.8 2.7 1.2-1.1 2.6-1.6 3.9-1.9.9-.2 1.8-.3 2.7-.3 1.4 0 2.7.2 4.2.7 1.6.6 3 1.4 4.2 2.4.6.6.9 1.2.8 1.8s-.4 1.2-1.2 1.6c-1.1.7-2.5 1.2-4.1 1.6-.6.2-1.4.3-2.2.3z"
                />
                <path
                  className="sst17"
                  d="M1027.9 793c.1 0 .3.1.4.2 1.1.8 2.2 1.7 2.9 2.9 0 .1.1.2.2.2s.1 0 .2-.1c1.1-1.2 2.5-1.7 3.9-2.1.9-.2 1.7-.3 2.6-.3 1.3 0 2.7.2 4 .7 1.5.5 2.8 1.3 4 2.3.9.9.8 1.7-.2 2.4-1.2.8-2.5 1.2-3.9 1.5-.8.2-1.5.3-2.3.3-.4 0-.9 0-1.3-.1-2.7-.3-5-1.4-6.8-3.5-.1-.1-.2-.2-.3-.2-.1 0-.2.1-.3.2-1 1.2-2.3 2-3.8 2.6-.1-.8.2-1.5.5-2.1.2-.3.4-.7.6-1 .1-.2.2-.3.1-.6-.5-.9-.7-1.8-.7-2.8v-.3l.2-.2m0-1.2c-.4 0-.7.2-.9.4-.3.3-.4.6-.4.9v.4c0 1 .2 2 .7 3-.2.3-.4.6-.5.9-.4.7-.7 1.6-.7 2.8 0 .4.2.7.6.9.2.1.4.2.6.2.1 0 .3 0 .4-.1 1.4-.6 2.6-1.3 3.6-2.2 1.9 1.9 4.2 3 6.9 3.3.4.1.9.1 1.4.1.9 0 1.7-.1 2.6-.3 1.7-.4 3.1-.9 4.3-1.7 1.1-.7 1.4-1.5 1.4-2.1 0-.5-.1-1.4-1-2.2-1.3-1.2-2.7-2-4.4-2.6-1.6-.5-3-.7-4.4-.7-1 0-1.9.1-2.8.3-1.2.3-2.5.8-3.7 1.6-.8-1-1.8-1.8-2.5-2.3-.3-.2-.6-.3-.7-.4-.2-.1-.4-.2-.5-.2z"
                />
              </g>
              <path
                className="sst108"
                d="M921 844.4c0 2.9-5.3 9.6-15.7 9.6-10.8 0-15.7-6.6-15.7-9.6 0-14.2 7-15.5 15.7-15.5S921 830 921 844.4z"
              />
              <path
                className="sst109"
                d="M905.3 838.2c-6 0-12.5-1.6-12.5-5.2s6.5-5.2 12.5-5.2 12.5 1.6 12.5 5.2-6.5 5.2-12.5 5.2z"
              />
              <path
                className="sst17"
                d="M905.3 829.3c6.1 0 11 1.7 11 3.7s-4.9 3.7-11 3.7-11-1.7-11-3.7 4.9-3.7 11-3.7m0-2.9c-6.4 0-13.9 1.7-13.9 6.6 0 1.6.9 3.9 5.2 5.4 2.4.8 5.5 1.2 8.7 1.2 6.4 0 13.9-1.7 13.9-6.6 0-1.6-.9-3.9-5.2-5.4-2.3-.8-5.4-1.2-8.7-1.2z"
              />
              <path
                className="sst7"
                d="M907.4 843.5c.3-.1.5-.1.8-.1.8 1.3.8 2.8 3.4 2.3 1.2-.4 3.4-.9 3.5-2.1-.1-.6-1.4-1.8.3-2.1"
              />
              <defs>
                <ellipse
                  id="SVGID_00000015342091220146672180000011431284864541127335_"
                  cx={905.3}
                  cy={833}
                  rx={11}
                  ry={3.7}
                />
              </defs>
              <clipPath id="SVGID_00000010278086913631288350000010475424329987483027_">
                <use
                  xlinkHref="#SVGID_00000015342091220146672180000011431284864541127335_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <g
                style={{
                  clipPath:
                    "url(#SVGID_00000010278086913631288350000010475424329987483027_)",
                }}
              >
                <circle className="sst111" cx={896.4} cy={834.6} r={3.6} />
                <circle className="sst111" cx={908.1} cy={836} r={3.6} />
                <circle className="sst111" cx={901.7} cy={836.2} r={3.6} />
                <circle className="sst111" cx={909.9} cy={830.8} r={3.6} />
                <circle className="sst111" cx={904.7} cy={830.2} r={3.6} />
                <circle className="sst111" cx={913.9} cy={834.8} r={3.6} />
              </g>
              <circle className="sst111" cx={897.2} cy={829.3} r={3.6} />
              <circle className="sst111" cx={901.2} cy={825.7} r={3.6} />
              <circle className="sst111" cx={909.9} cy={830.7} r={3.6} />
              <circle className="sst111" cx={903.3} cy={831.1} r={3.6} />
              <circle className="sst111" cx={905.4} cy={824.9} r={3.6} />
              <path
                className="sst108"
                d="M966.9 800.2c0 2.9-5.3 9.6-15.7 9.6-10.8 0-15.7-6.6-15.7-9.6 0-14.2 7-15.5 15.7-15.5s15.7 1.1 15.7 15.5z"
              />
              <path
                className="sst109"
                d="M951.2 794c-6 0-12.5-1.6-12.5-5.2s6.5-5.2 12.5-5.2 12.5 1.6 12.5 5.2-6.5 5.2-12.5 5.2z"
              />
              <path
                className="sst17"
                d="M951.2 785.1c6.1 0 11 1.7 11 3.7 0 2.1-4.9 3.7-11 3.7s-11-1.7-11-3.7 4.9-3.7 11-3.7m0-2.9c-6.4 0-13.9 1.7-13.9 6.6 0 1.6.9 3.9 5.2 5.4 2.4.8 5.5 1.2 8.7 1.2 6.4 0 13.9-1.7 13.9-6.6 0-1.6-.9-3.9-5.2-5.4-2.3-.8-5.4-1.2-8.7-1.2z"
              />
              <path
                className="sst7"
                d="M953.3 799.3c.3-.1.5-.1.8-.1.8 1.3.8 2.8 3.4 2.3 1.2-.4 3.4-.9 3.5-2.1-.1-.6-1.4-1.8.3-2.1"
              />
              <defs>
                <ellipse
                  id="SVGID_00000103956151688868916740000008479606044603938693_"
                  cx={951.2}
                  cy={788.8}
                  rx={11}
                  ry={3.7}
                />
              </defs>
              <clipPath id="SVGID_00000015341068881225621550000006942801577418293679_">
                <use
                  xlinkHref="#SVGID_00000103956151688868916740000008479606044603938693_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <g
                style={{
                  clipPath:
                    "url(#SVGID_00000015341068881225621550000006942801577418293679_)",
                }}
              >
                <circle className="sst113" cx={942.4} cy={790.4} r={3.6} />
                <circle className="sst113" cx={954.1} cy={791.8} r={3.6} />
                <circle className="sst64" cx={947.6} cy={792} r={3.6} />
                <circle className="sst111" cx={955.8} cy={786.6} r={3.6} />
                <circle className="sst111" cx={950.6} cy={786} r={3.6} />
                <circle className="sst64" cx={959.7} cy={790.7} r={3.6} />
              </g>
              <circle className="sst64" cx={943} cy={785.2} r={3.6} />
              <circle className="sst113" cx={948.8} cy={785.5} r={3.6} />
              <circle className="sst64" cx={954.8} cy={786.6} r={3.6} />
              <circle className="sst113" cx={956.5} cy={781.4} r={3.6} />
              <circle className="sst113" cx={960.5} cy={785.4} r={3.6} />
              <path
                className="sst108"
                d="M943.2 810.3c0 2.9-5.3 9.6-15.7 9.6-10.8 0-15.7-6.6-15.7-9.6 0-14.2 7-15.5 15.7-15.5s15.7 1 15.7 15.5z"
              />
              <path
                className="sst109"
                d="M927.5 804.1c-6 0-12.5-1.6-12.5-5.2s6.5-5.2 12.5-5.2 12.5 1.6 12.5 5.2-6.4 5.2-12.5 5.2z"
              />
              <path
                className="sst17"
                d="M927.5 795.1c6.1 0 11 1.7 11 3.7s-4.9 3.7-11 3.7-11-1.7-11-3.7 4.9-3.7 11-3.7m0-2.9c-6.4 0-13.9 1.7-13.9 6.6 0 1.6.9 3.9 5.2 5.4 2.4.8 5.5 1.2 8.7 1.2 6.4 0 13.9-1.7 13.9-6.6 0-1.6-.9-3.9-5.2-5.4-2.3-.7-5.4-1.2-8.7-1.2z"
              />
              <path
                className="sst7"
                d="M929.6 809.3c.3-.1.5-.1.8-.1.8 1.3.8 2.8 3.4 2.3 1.2-.4 3.4-.9 3.5-2.1-.1-.6-1.4-1.8.3-2.1"
              />
              <defs>
                <ellipse
                  id="SVGID_00000012460236077066777830000014640550564283705271_"
                  cx={927.5}
                  cy={798.9}
                  rx={11}
                  ry={3.7}
                />
              </defs>
              <clipPath id="SVGID_00000023966829511674241000000011927098925981510079_">
                <use
                  xlinkHref="#SVGID_00000012460236077066777830000014640550564283705271_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <g
                style={{
                  clipPath:
                    "url(#SVGID_00000023966829511674241000000011927098925981510079_)",
                }}
              >
                <circle className="sst115" cx={918.7} cy={800.5} r={3.6} />
                <circle className="sst115" cx={930.4} cy={801.8} r={3.6} />
                <circle className="sst116" cx={923.9} cy={802} r={3.6} />
                <circle className="sst111" cx={932.1} cy={796.7} r={3.6} />
                <circle className="sst111" cx={926.9} cy={796} r={3.6} />
                <circle className="sst116" cx={936.1} cy={800.7} r={3.6} />
              </g>
              <circle className="sst116" cx={919.4} cy={795.2} r={3.6} />
              <circle className="sst115" cx={923.5} cy={791.5} r={3.6} />
              <circle className="sst116" cx={931.1} cy={796.6} r={3.6} />
              <circle className="sst115" cx={925.5} cy={796.9} r={3.6} />
              <circle className="sst115" cx={934.6} cy={792.8} r={3.6} />
              <path
                className="sst44"
                d="m968.4 833.2 2.2-4.6 2.6-15.2-4.7-3.6 13.7-10.1 4.6 2.8-4.6 16.8"
              />
              <path
                className="sst44"
                d="m970.6 828.6 11.6-9.3 26.3 5.5-9.7 10.7zM986.9 802.5l30.8 6.3M1018 808.9l-14.7 11.1-30.1-6.6 13.6-10.9"
              />
              <path
                className="sst44"
                d="m1003.3 820-4.6 15.3 1.1 4.3M1018 808.9l-9.5 15.9 1.5 3.2"
              />
              <path
                className="sst65"
                d="M1000.4 839.2c1-.1 1.9 1 1.7 2s-1.2 1.5-2.2 1.6-1.7-.8-1.6-1.8c.2-1 1.1-1.7 2.1-1.8zM1010 827.7c1-.1 2 .5 1.9 1.5 0 1-.7 2-1.6 2.1-1 .1-2.2-.5-2.1-1.5s.8-1.9 1.8-2.1z"
              />
              <ellipse
                transform="rotate(-36.714 967.683 834.916)"
                cx={967.6}
                cy={834.9}
                rx={2}
                ry={1.6}
                style={{
                  fill: "#fff",
                  stroke: "#222",
                  strokeWidth: 1.9411,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 9.9988,
                }}
              />
              <path className="sst7" d="m965.6 812 19.9-14.8" />
              <circle className="sst228" cx={987.1} cy={820.8} r={3.6} />
              <circle className="sst229" cx={995.8} cy={823.8} r={3.6} />
              <circle className="sst230" cx={990.5} cy={824.5} r={3.6} />
              <circle className="sst228" cx={994.6} cy={828.7} r={3.6} />
              <circle className="sst229" cx={981.2} cy={821} r={3.6} />
              <circle className="sst230" cx={984.1} cy={826} r={3.6} />
              <defs>
                <path
                  id="SVGID_00000160162055627569311100000012107385773650233742_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000148635751140339710700000003519281442624255625_">
                <use
                  xlinkHref="#SVGID_00000160162055627569311100000012107385773650233742_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000148635751140339710700000003519281442624255625_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m967.5 827.6 37.2-21.1"
              />
              <defs>
                <path
                  id="SVGID_00000026861400961090012930000001236405377828090814_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000012431307529679862490000007012892710074675900_">
                <use
                  xlinkHref="#SVGID_00000026861400961090012930000001236405377828090814_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000012431307529679862490000007012892710074675900_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m962.8 826.7 37.6-21.2"
              />
              <defs>
                <path
                  id="SVGID_00000096752189468370730480000001439312101928263351_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000053515086757844837100000011631086590987651464_">
                <use
                  xlinkHref="#SVGID_00000096752189468370730480000001439312101928263351_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000053515086757844837100000011631086590987651464_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m958.2 825.7 37.6-21.2"
              />
              <defs>
                <path
                  id="SVGID_00000181068312915521398020000006909424005152461470_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000122001693765274004030000015697498520486922420_">
                <use
                  xlinkHref="#SVGID_00000181068312915521398020000006909424005152461470_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000122001693765274004030000015697498520486922420_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m953.5 824.7 37.6-21.2"
              />
              <defs>
                <path
                  id="SVGID_00000054234901006121067950000017074242350290160010_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000054261457406652840630000013454535316808248983_">
                <use
                  xlinkHref="#SVGID_00000054234901006121067950000017074242350290160010_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000054261457406652840630000013454535316808248983_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m986.2 831.5 37.6-21.2"
              />
              <defs>
                <path
                  id="SVGID_00000056415890303078692500000007254997561553850255_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000003077476074512311630000007109863995401710211_">
                <use
                  xlinkHref="#SVGID_00000056415890303078692500000007254997561553850255_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000003077476074512311630000007109863995401710211_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m990.9 832.4 37.6-21.2"
              />
              <defs>
                <path
                  id="SVGID_00000166659860204405267290000003891274357895527843_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000038376945672668923650000018019081730317772422_">
                <use
                  xlinkHref="#SVGID_00000166659860204405267290000003891274357895527843_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000038376945672668923650000018019081730317772422_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m981.6 830.5 37.5-21.2"
              />
              <defs>
                <path
                  id="SVGID_00000030483252527945089500000016627938498689745537_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000127032162334627612130000006536969608985801661_">
                <use
                  xlinkHref="#SVGID_00000030483252527945089500000016627938498689745537_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000127032162334627612130000006536969608985801661_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m976.9 829.5 37.6-21.2"
              />
              <defs>
                <path
                  id="SVGID_00000124129493848080931060000004717986999444653710_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000136404109557489957530000008464794479224225723_">
                <use
                  xlinkHref="#SVGID_00000124129493848080931060000004717986999444653710_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000136404109557489957530000008464794479224225723_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m972.2 828.6 37.6-21.2"
              />
              <defs>
                <path
                  id="SVGID_00000106141570136902054690000003100172320156417461_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000000916217510659918910000007849528188075560365_">
                <use
                  xlinkHref="#SVGID_00000106141570136902054690000003100172320156417461_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000000916217510659918910000007849528188075560365_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1015 837.4 998.2 805"
              />
              <defs>
                <path
                  id="SVGID_00000106839556496484647790000000874588588163305354_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000103986541653346054670000015186213413260827020_">
                <use
                  xlinkHref="#SVGID_00000106839556496484647790000000874588588163305354_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000103986541653346054670000015186213413260827020_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1019.7 838.3-14.8-28.2"
              />
              <defs>
                <path
                  id="SVGID_00000071562127921814858290000012841948967608522901_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000096741896948713533800000017098674916380357513_">
                <use
                  xlinkHref="#SVGID_00000071562127921814858290000012841948967608522901_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000096741896948713533800000017098674916380357513_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1024.4 839.3-16.9-32.4"
              />
              <defs>
                <path
                  id="SVGID_00000087403736820648595260000007093818385654314908_"
                  d="m973.2 813.4-2.4 14.7 25 5.7 12.7-9.1 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000013161868058834387020000012423782428943547553_">
                <use
                  xlinkHref="#SVGID_00000087403736820648595260000007093818385654314908_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000013161868058834387020000012423782428943547553_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1029.1 840.2-16.9-32.3"
              />
              <defs>
                <path
                  id="SVGID_00000060744926943610957760000010685980865132820912_"
                  d="m973.2 813.4-2.4 14.7 26.9 6.9 10.8-10.3 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000080198767346416652600000002366187356479944862_">
                <use
                  xlinkHref="#SVGID_00000060744926943610957760000010685980865132820912_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000080198767346416652600000002366187356479944862_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m997.3 835.1-17.8-33.9"
              />
              <defs>
                <path
                  id="SVGID_00000000182502067313024600000018436516007342445748_"
                  d="m973.2 813.4-2.4 14.7 26.9 7.1 10.8-10.5 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000018959345483181955520000011159441131198859690_">
                <use
                  xlinkHref="#SVGID_00000000182502067313024600000018436516007342445748_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000018959345483181955520000011159441131198859690_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m992.4 833.5-17.6-33.3"
              />
              <defs>
                <path
                  id="SVGID_00000147188003670974453750000018249308738370295182_"
                  d="m973.2 813.4-2.4 14.7 27.6 7.5 10.1-10.9 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000100354793267641267330000013762334897222807719_">
                <use
                  xlinkHref="#SVGID_00000147188003670974453750000018249308738370295182_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000100354793267641267330000013762334897222807719_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m987.1 831.6-16.9-32.3"
              />
              <defs>
                <path
                  id="SVGID_00000065775897243298247250000000000254802602891943_"
                  d="m973.2 813.4-2.4 14.7 27.2 7.1 10.5-10.5 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000025437937719057223500000004174833492424501908_">
                <use
                  xlinkHref="#SVGID_00000065775897243298247250000000000254802602891943_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000025437937719057223500000004174833492424501908_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m982 830.6-16.9-32.4"
              />
              <defs>
                <path
                  id="SVGID_00000051379249122139117500000016632138920559713424_"
                  d="m973.2 813.4-2.4 14.7 27.9 7.2 9.8-10.6 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000129196049365957030470000018308812949087527854_">
                <use
                  xlinkHref="#SVGID_00000051379249122139117500000016632138920559713424_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000129196049365957030470000018308812949087527854_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M976.2 829.4 959.3 797"
              />
              <defs>
                <path
                  id="SVGID_00000137134506465797445620000009853108061289806465_"
                  d="m973.2 813.4-2.4 14.7 28.1 6.9 9.6-10.3 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000134971138503484376780000006958531791674888112_">
                <use
                  xlinkHref="#SVGID_00000137134506465797445620000009853108061289806465_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000134971138503484376780000006958531791674888112_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1001 834.5-16.9-32.4"
              />
              <defs>
                <path
                  id="SVGID_00000168798740895121271900000016215259650794259133_"
                  d="m973.2 813.4-2.4 14.7 28.1 7.3 9.6-10.7 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000057851966777582946230000004107327452806196881_">
                <use
                  xlinkHref="#SVGID_00000168798740895121271900000016215259650794259133_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000057851966777582946230000004107327452806196881_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="m1005.7 835.4-16.9-32.3"
              />
              <defs>
                <path
                  id="SVGID_00000150093315694639882170000001532554629258252960_"
                  d="m973.2 813.4-2.4 14.7 28 7.1 9.7-10.5 9.2-15.5-30.5-6.5z"
                />
              </defs>
              <clipPath id="SVGID_00000109025903168806809380000014782797590257584800_">
                <use
                  xlinkHref="#SVGID_00000150093315694639882170000001532554629258252960_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000109025903168806809380000014782797590257584800_)",
                  fill: "none",
                  stroke: "#222",
                  strokeWidth: 0.48,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M1010.4 836.4 993.5 804"
              />
              <path
                className="sst24"
                d="M846.9 772.3c-.7-2.5 2-5.5 4.5-4.6-.7-1.2-1.4-2.6-1-4s2.5-2.2 3.2-1c-.5-3.2 1.2-6.8 4.2-7.8 3-1.1 6.9 1.3 6.7 4.6.6-1.4 2.2-2.3 3.7-2.1 1.5.3 2.7 1.7 2.8 3.2.2-1.2 2.1-1.2 2.8-.3s.7 2.3.6 3.5c1.2-1.5 4-1 4.9.7 1 1.7.3 4-1.2 5.4 1.2-1.2 3.3-1.1 4.5 0 1.2 1.2 1.2 3.3.1 4.5.7-1.1 1.8-2.1 3.1-2.2 1.3-.1 2.7 1 2.4 2.3 1-1 2.9.1 3.1 1.5.1 1.4-.7 2.7-1.6 3.9 2.3-1.2 5.4-.1 6.6 2.1s.3 5.4-1.9 6.7c2.2-.4 4.8 1 5.2 3.2s-1.9 4.6-4.1 3.8c1.3-.1 2.6.8 3.3 2s.8 2.6.8 3.9c0 .4 0 .8-.2 1.2-.4.9-1.4 1.2-2.3 1.1-.9-.1-1.7-.6-2.5-1.1 1 2.1.2 4.9-1.8 6-2.1 1-5-.7-5-3-.7 2.6-3.8 4.2-6.4 3.3-2.5-.9-3.9-4.1-3-6.6-2.8.1-5.2 2.9-7.9 2.3-2.4-.6-3.3-3.5-3.6-5.9-.1-1 .1-2.4 1.1-2.2-1.6 1.4-4.6.7-5.2-1.3-1.8-.1-2.8-2.6-1.6-4-1.4.6-2.9 1.2-4.5 1.3-1.5.1-3.3-.5-4.1-1.8s-.5-3.4 1-4c-1.8 0-3.6-.3-5.1-1.5-1.4-1.1-2.2-3.1-1.7-4.8s2.4-3 4.2-2.4c-1.2-.8-1.4-2.7-.3-3.7-.6 2-3.5-1-3.8-2.2zM1096.9 774.4c-1.9 1.8-.9 5.8 1.7 6.1-2.7.4-5.3 2.1-6.2 4.6-.9 2.5.5 5.9 3.2 6.4-1.4.9-3 2-3.6 3.6s.3 3.8 2 3.9c-3.3.3-5.9 3.7-5.4 7 .5 3.2 3.9 5.7 7.1 5.2-.6 2.5 1.3 5.4 3.9 5.8s5.2-1.8 5.4-4.4c.5 1.3 2.5 1.5 3.7.7 1.2-.9 1.7-2.3 2.2-3.7 2.2 1.6 5.3 1.2 7.9.6 2.4-.5 4.8-1.2 6.7-2.7 1.9-1.5 3.1-4.1 2.4-6.4 1.6.1 3.2.2 4.7-.2s3-1.4 3.5-2.9c.9 1.7 4 1.6 4.7-.3 1.5 1.7 3.9 2.4 6.1 2 2.2-.5 4.1-2.2 4.8-4.4 1.2 1.6 3.7 1.6 5.3.4 1.5-1.2 2.1-3.4 2-5.3.6 2.3 3.2 3.8 5.5 3.3s4-2.9 3.6-5.3c2.3-.1 4.5-1.2 5.6-3.2 1-2 .2-4.9-1.9-5.6 3.6-3 3.6-9.5 0-12.5 1.6-.6 3.1-1.7 4.1-3.2 1.1-1.4 2.7-5.6-.1-8.4-2.4-2.4-6.3-.8-6.9.3.8-1.5 1-3.6-.1-5s-3.6-1.5-4.5 0v-1.7c-2.2-1-5.1 0-6.2 2.3 1.7-2.6.4-6.7-2.5-7.9s-6.7.8-7.3 3.9c.7-.9.4-2.3-.4-3-.8-.8-2-1-3.2-.8-2 .2-3.9 1.4-4.9 3.1-1 1.7-1.1 4-.1 5.8-2.5-2-6.6-1.3-8.4 1.4-1.7 2.7-.6 6.7 2.3 8.2-2.4-.8-5.3.4-6.3 2.7-1.1 2.3-.1 5.3 2 6.6-1.7-1.2-3.7-2-5.8-1.7-2 .3-3.9 1.8-4.3 3.8.9-1.9 1.1-4.2.1-6-.9-1.9-3-3.2-5-3-2.1.2-3.9 2-3.9 4.1-.1-1.9-3-2.6-4.4-1.3-1.5 1.2-1.7 3.4-1.6 5.3 0-.5-1.7 1.4-1.8 1.7-1.7-1.1-4.1-1.4-5.7.1z"
              />
              <circle className="sst6" cx={1153.1} cy={764} r={4} />
              <circle className="sst6" cx={1153.7} cy={782.9} r={4} />
              <circle className="sst6" cx={1133.6} cy={782} r={4} />
              <circle className="sst6" cx={1111} cy={800.1} r={4} />
              <circle className="sst6" cx={1113} cy={783} r={4} />
              <circle className="sst6" cx={863.7} cy={770.9} r={4} />
              <circle className="sst6" cx={868.5} cy={786.3} r={4} />
              <circle className="sst6" cx={884.7} cy={790} r={4} />
            </g>
            <g id="bus_x5F_on" onMouseLeave={()=>setActiveBus(false)} style={{display: isActiveBus? "block" : "none"}}>
              <linearGradient
                id="SVGID_00000165949630081110681780000008726143082017651841_"
                gradientUnits="userSpaceOnUse"
                x1={1065.514}
                y1={837.795}
                x2={1089.52}
                y2={861.394}
                gradientTransform="matrix(1 0 0 -1 0 1320)"
              >
                <stop
                  offset={0.076}
                  style={{
                    stopColor: "#9b9bcc",
                    stopOpacity: 0,
                  }}
                />
                <stop
                  offset={1}
                  style={{
                    stopColor: "#9b9bcc",
                  }}
                />
              </linearGradient>
              <path
                style={{
                  opacity: 0.8,
                  fill: "url(#SVGID_00000165949630081110681780000008726143082017651841_)",
                  enableBackground: "new",
                }}
                d="M1169.9 416.3c-9.2 4.9-18.2 7.3-31.8 9.3-4.3.6-9.1 1-14.2 1.5-31.9 3.1-75.5 7.4-76.2 48.4 0 1.4 1.1 1.5 2.5 1.5s2.5-.1 2.5-1.5c.6-36.6 40-40.5 71.7-43.5 5.1-.5 9.9-1 14.4-1.6 12.6-1.9 21.1-4 30.4-8.5 0 0 0-.4.1-.7.1-.2.3-.3.5-.4l.1-4.5z"
              />
              <path
                className="sst253"
                d="M1196 398.6c-1.1-.9-2.6-.7-3.5.4-4.8 5.8-9.2 9.9-16.4 13.9l.1 5.9c8.8-4.6 14.4-9.7 20.1-16.7.9-1 .7-2.6-.3-3.5z"
              />
              <linearGradient
                id="SVGID_00000092448672052924343610000003577520881711054497_"
                gradientUnits="userSpaceOnUse"
                x1={1060.122}
                y1={840.858}
                x2={1078.226}
                y2={865.619}
                gradientTransform="matrix(1 0 0 -1 0 1320)"
              >
                <stop
                  offset={0}
                  style={{
                    stopColor: "#9b9bcc",
                    stopOpacity: 0,
                  }}
                />
                <stop
                  offset={1}
                  style={{
                    stopColor: "#9b9bcc",
                  }}
                />
              </linearGradient>
              <path
                style={{
                  opacity: 0.8,
                  fill: "url(#SVGID_00000092448672052924343610000003577520881711054497_)",
                  enableBackground: "new",
                }}
                d="M1158.9 404.6c-10.5 6.7-23.6 11.2-39.5 13.5-4.3.6-9.1 1-14.2 1.5-31.9 3.1-75.5 7.4-76.2 48.4 0 1.4 1.1 1.5 2.5 1.5s2.5-.1 2.5-1.5c.6-36.6 40-40.5 71.7-43.5 5.1-.5 9.9-1 14.4-1.6 16.2-2.4 29.6-6.8 40.5-13.6-.3-.1-1.9-1.2-1.7-4.7z"
              />
              <path
                className="sst253"
                d="M1177.3 391.2c-1.1-.9-2.6-.7-3.5.4-2.3 2.8-4.7 5.2-7.5 7.6.2 0 4.3.1 6.3 1.1 1.7-1.7 3.6-3.7 5.1-5.5.8-1.2.7-2.8-.4-3.6z"
              />
              <path
                className="sst117"
                d="M1179.5 388.4c-.4 2.8-.5 5.8-2 6.8-.7.4-2.7 0-3.5-.1-2.4-.4-3.9-3.9-3.3-8 .6-4 3.1-7 5.5-6.6 1.2.2 4 0 4.6 1.6.6 1.3-1 4.4-1.3 6.3z"
              />
              <ellipse
                transform="rotate(-81.211 1178.871 388.07)"
                className="sst118"
                cx={1178.9}
                cy={388.1}
                rx={7.4}
                ry={4.4}
              />
              <path
                className="sst117"
                d="M1200.2 394.6c-.1 2.8.1 5.8-1.3 7-.7.5-2.7.2-3.5.2-2.4-.1-4.2-3.6-4-7.6.2-4.1 2.4-7.3 4.8-7.2 1.3 0 4-.4 4.8 1.2.6 1.2-.7 4.4-.8 6.4z"
              />
              <ellipse
                transform="rotate(-86.801 1199.482 394.676) scale(.99996)"
                className="sst119"
                cx={1199.5}
                cy={394.7}
                rx={7.4}
                ry={4.4}
              />
              <path
                className="sst117"
                d="M1240.2 371.8c-.4 2.7-.4 5.5-2 6.5-.7.4-2.6 0-3.3-.1-2.3-.3-3.7-3.8-3.1-7.6.6-3.8 3-6.7 5.3-6.3 1.2.2 3.8 0 4.4 1.5.5 1.2-1 4.2-1.3 6z"
              />
              <ellipse
                transform="rotate(-81.211 1239.467 371.421)"
                className="sst118"
                cx={1239.5}
                cy={371.4}
                rx={7.1}
                ry={4.2}
              />
              <path
                className="sst120"
                d="m1241.1 356.2 1.2-12.3-6.4-1.1-2.6-7.7-4.8 6.4-6.7-1.2-2.7-7.4-4.6 6.1-5.1-.9-31.8 12.8c-7.2 2.4-6.9 9.7-6.9 9.7l-2.3 25.2c-.1 1.2.7 2.4 1.9 2.9l31.8 10.7c1.6.5 3.3.3 4.7-.7l35.3-24.9c2.1-1.5 3.5-3.8 3.7-6.4l1.4-15.1-4.8-.6"
              />
              <path
                className="sst5"
                d="m1237.6 347.4-29.5 18.6c-1.7 1.1-3.7 1.4-5.7.9l-26-7.6M1203.2 395.2l2.6-27.9"
              />
              <path className="sst45" d="m1175.3 364.4-.6 6.9 25.2 7.3.7-7.2z" />
              <path className="sst121" d="m1180 383.2-.4 3.8 10.7 3.6.4-4.3z" />
              <path className="sst45" d="m1237.6 353.7-.4 7.2-27.6 18.2.7-7.6z" />
              <ellipse
                transform="rotate(-87.808 1173.96 382.554) scale(1.00003)"
                className="sst123"
                cx={1174}
                cy={382.6}
                rx={3.2}
                ry={2.4}
              />
              <ellipse
                transform="rotate(-87.808 1197.092 389.776) scale(1.00003)"
                className="sst123"
                cx={1197.1}
                cy={389.8}
                rx={3.2}
                ry={2.4}
              />
              <path
                className="sst255"
                d="M1154.1 377.2c-3 .7-5.3 3-5.9 6-2.5 12.8 9.1 14 12 12.5 5.5-2.7 13.3-9.8 14-10.5 1.5-1.2 1.8-3.3.6-4.7-.5-.6-16.9-4-20.7-3.3zM1177.2 384.5s-.1 0 0 0c-2.7.6-4.8 2.8-5.3 5.5-2.8 13.2 8.4 14.5 11.5 13 5.5-2.7 13.3-9.8 14-10.5 1.5-1.2 1.8-3.3.6-4.7-.6-.6-19.4-3.7-20.8-3.3z"
              />
              <path
                className="sst50"
                d="m1206.8 348.2 1.9-35.3s-7.6-5.8-15.7 1.1c-8.4 7.2-19.1 5.2-19.1 5.2l-.9 21.6s11.3 2 20.3-4.3c9.8-6.7 13.9-1.1 13.9-1.1"
              />
              <path
                className="sst26"
                d="M1198.8 328s-.1 0 0 0c-.3.1-.5.2-.7.2h-.3c0-.3.1-.5 0-.8.3-.1.7-.3 1-.7 0-.1.1-.1.1-.2s0-.1-.1-.2c-.1 0-.1-.1-.2-.1s-.1 0-.2.1c-.2.2-.4.4-.6.5 0-.3-.1-.6-.2-.8.3-.2.5-.5.7-1v-.2c0-.1-.1-.1-.1-.1h-.1c-.1 0-.2.1-.2.1-.1.3-.3.5-.4.6-.2-.7-.5-1.2-.5-1.3.4-2.4-.5-3.6-.9-4-.1-.1-.3-.2-.5-.2-1.4.1-2.2 1-2.6 1.6-.2.4-.5 1-.6 1.1-.1-.4-.5-1.6-.8-1.5-.4.1-.1 1.4-.3 1.6-.4-.5-.7-1.2-1-1.1s0 .9-.2 1.5c-.7-.8-1.5-1.4-2.3-1.7-.8-.3-1.5-.2-2-.1-.3.1-.5.3-.6.6-.2.9-.1 1.8.4 2.8.3.5.6.9.8 1.1 0 .2-.1.8-.2 1.5-.5-.2-.9-.6-.9-.6-.1-.1-.1-.1-.2-.1h-.1c-.1 0-.1.1-.1.2v.2s.3.3.7.6c.2.1.4.2.6.2 0 .3 0 .6.1.9-.6 0-1-.4-1-.4-.1 0-.1-.1-.2 0-.1 0-.1 0-.2.1s-.1.3.1.4c0 0 .3.2.8.4.2.1.4.1.6.1 0 .1.1.3.1.5 0 .1 0 .1.1.2h-.4c-.4 0-.7-.1-.7-.1h-.1c-.1 0-.2.1-.2.2s.1.3.2.3c0 0 .4.1.9.1h.2c.1 0 .2 0 .4-.1.9 1.8 3.2 2.9 5.8 2.6 2.8-.3 4.9-2.1 5.1-4.3h.4c.3 0 .5-.1.8-.2.1-.1.2-.2.1-.3-.1-.2-.2-.3-.3-.2zm-.6-3.2zm-.1 0c.1 0 .1 0 0 0 .1 0 0 0 0 0zm-13 1.9zm0 1.7zm.1 0zm.1.1s.1 0 0 0c.1 0 0 0 0 0zm.1 0s0 .1 0 0c0 .1 0 0 0 0zm.1.1c.1 0 .1 0 0 0 .1 0 .1 0 0 0zm.1.1s.1 0 0 0c.1 0 0 0 0 0zm.7.1zm-.9 1.2zm1.2-7.3c.6-.3 1.7.5 2.1 1.2l-1.3 1.1c-.7-.5-1.2-2.2-.8-2.3zm4.5 5.9c-.2.1-.4.1-.6.1-.1-.1 0 .5-.7.5-.1 0-.2-.1-.3-.2 0 0-.1-.1-.1 0-1 .9-1.5-1.4-.3-1.2.1 0 0-.4.6-.5.4 0 .5.4.6.2.2-.4.9-.4.9.2 0 .1 0 .1.1.1.1.1.2.5-.2.8zm4.4-.4c-.1 0-.1 0 0 0-.1.1-.2.2-.3.2-.7.2-.7-.5-.8-.3-.2.1-.4.1-.6.1-.5-.2-.4-.6-.2-.8v-.1c-.2-.5.6-.7.8-.4.1.1.1-.3.5-.4.5-.1.5.4.7.3 1-.3 1.1 2.1-.1 1.4zm0-4.7-1.4-.7c.1-.6.9-1.3 1.4-1.4.5 0 .3 1.7 0 2.1zm3.3 4.5z"
              />
            </g>
            <g id="square_x5F_on" onMouseLeave={()=>setActiveSquare(false)} style={{display: isActiveSquare? "block" : "none"}}>
              <path
                className="sst124"
                d="M1018.3 564.7c0 8.3-18.3 16.4-40.9 16.4-22.6 0-40.9-8.1-40.9-16.4 0-8.3 18.3-14.9 40.9-14.9 22.5-.1 40.9 6.6 40.9 14.9z"
              />
              <path
                className="sst124"
                d="M1003.7 564.5c0 4.6-11.8 8.4-26.4 8.4-14.6 0-26.4-3.7-26.4-8.4 0-2.1 2.7-15.5 4-16.2 6-3.5 14.3-3.6 22.4-3.6 6.1 0 17.5 1.1 22.5 3.6.6.2 3.9 13.5 3.9 16.2z"
              />
              <ellipse className="sst124" cx={977.3} cy={548.9} rx={22.8} ry={7.2} />
              <ellipse className="sst124" cx={977.3} cy={548.9} rx={13.7} ry={3.7} />
              <path
                className="sst124"
                d="M977.3 549.8h0c-2 0-3.6-1.6-3.6-3.6V536c0-2 1.6-3.6 3.6-3.6h0c2 0 3.6 1.6 3.6 3.6v10.2c.1 2-1.6 3.6-3.6 3.6z"
              />
              <path
                className="sst124"
                d="M987.4 533.3c0 1.8-4.5 3.2-10.1 3.2s-10.1-1.4-10.1-3.2c0-.8 1-5.9 1.5-6.2 2.3-1.3 5.5-1.4 8.6-1.4 2.4 0 6.7.4 8.6 1.4.3.1 1.5 5.2 1.5 6.2z"
              />
              <ellipse className="sst124" cx={977.3} cy={527.4} rx={8.7} ry={2.8} />
              <path
                className="sst124"
                d="M977.3 527h0c-1.2 0-2.2-1-2.2-2.2V514c0-1.2 1-2.2 2.2-2.2h0c1.2 0 2.2 1 2.2 2.2v10.9c0 1.2-1 2.1-2.2 2.1z"
              />
              <path
                className="sst124"
                d="M994.9 514.9c0 3.1-7.9 5.6-17.6 5.6s-17.6-2.5-17.6-5.6c0-.6-.3-4.1.1-4.6 2.2-2.3 9.5-1 17.5-1 6.4 0 13.5-1.8 16.7-.2 1.6.9.9 4.7.9 5.8z"
              />
              <ellipse className="sst124" cx={977.3} cy={510.9} rx={17.6} ry={5.6} />
              <path
                className="sst126"
                d="M1026.3 547.6c0 1.8-2.7 3.2-6 3.2s-6-1.4-6-3.2-.7-4.2 6-4.2c7-.1 6 2.4 6 4.2z"
              />
              <ellipse className="sst127" cx={1020.4} cy={545.2} rx={6} ry={3.2} />
              <ellipse className="sst128" cx={1020.4} cy={545.2} rx={2.4} ry={1.3} />
              <path
                className="sst126"
                d="M939 547.7c0 1.8-2.7 3.2-6 3.2s-6-1.4-6-3.2-.7-4.2 6-4.2c6.9 0 6 2.4 6 4.2z"
              />
              <ellipse className="sst127" cx={933.1} cy={545.2} rx={6} ry={3.2} />
              <ellipse className="sst128" cx={933.1} cy={545.2} rx={2.4} ry={1.3} />
              <path
                className="sst126"
                d="M1029.5 580.8c0 2-3 3.6-6.6 3.6-3.7 0-6.6-1.6-6.6-3.6 0-7.5 3-4.6 6.6-4.6s6.6-2.9 6.6 4.6z"
              />
              <ellipse className="sst127" cx={1022.9} cy={577.7} rx={6.6} ry={3.6} />
              <ellipse className="sst128" cx={1022.9} cy={577.7} rx={2.9} ry={1.6} />
              <path
                className="sst126"
                d="M984 594.5c0 2-3 3.6-6.6 3.6s-6.6-1.6-6.6-3.6c0-7.5 3-4.6 6.6-4.6s6.6-3 6.6 4.6z"
              />
              <ellipse className="sst127" cx={977.4} cy={591.4} rx={6.6} ry={3.6} />
              <ellipse className="sst128" cx={977.4} cy={591.4} rx={2.9} ry={1.6} />
              <path
                className="sst126"
                d="M938.1 580.8c0 2-3 3.6-6.6 3.6-3.7 0-6.6-1.6-6.6-3.6 0-7.5 3-4.6 6.6-4.6s6.6-2.9 6.6 4.6z"
              />
              <ellipse className="sst127" cx={931.5} cy={577.7} rx={6.6} ry={3.6} />
              <ellipse className="sst128" cx={931.5} cy={577.7} rx={2.9} ry={1.6} />
              <path
                className="sst125"
                d="M934.9 545.4c0 .7-.7 1.1-2 1.1s-2.4-.6-2.4-1.3c0-.4-3.3-10.2-8.9-11.1-4-.6 2.6-7 11.3-7 8.1 0 14.9 6.6 10.9 7-5.1.4-8.9 10.9-8.9 11.3z"
              />
              <path
                className="sst256"
                d="M927.2 530.6c1.3 1.6 2.8 4.1 3.4 6.1M922.1 534.3c2.4.6 4.3 2.3 5.7 4.4s2.2 4.4 3 6.7M934.6 545.4c0-3.7 5.1-9.5 9.5-11.5M933.1 540.8c.3-1.6 2.4-8 5.6-10.5"
              />
              <path
                className="sst125"
                d="M1022.4 545.4c0 .7-.7 1.1-2 1.1s-2.4-.6-2.4-1.3c0-.4-3.3-10.2-8.9-11.1-4-.6 2.6-7 11.3-7 8.1 0 14.9 6.6 10.9 7-5 .4-8.9 10.9-8.9 11.3z"
              />
              <path
                className="sst256"
                d="M1014.7 530.6c1.3 1.6 2.8 4.1 3.4 6.1M1009.7 534.3c2.4.6 4.3 2.3 5.7 4.4s2.2 4.4 3 6.7M1022.2 545.3c0-3.7 5.1-9.5 9.5-11.5M1020.6 540.8c.3-1.6 2.4-8 5.6-10.5"
              />
              <path
                className="sst125"
                d="M933.7 578.1c0 .8-.7 1.2-2.1 1.2s-2.5-.6-2.5-1.4c0-.4-3.5-10.8-9.5-11.8-4.2-.7 2.8-7.4 12-7.4 8.5 0 15.7 7 11.5 7.4-5.3.5-9.4 11.6-9.4 12z"
              />
              <path
                className="sst256"
                d="M925.5 562.4c1.4 1.7 3 4.3 3.6 6.4M920.2 566.4c2.5.6 4.6 2.5 6 4.6 1.4 2.2 2.3 4.6 3.1 7.1M933.4 578.1c0-3.9 5.4-10 10.1-12.2M931.8 573.3c.4-1.7 2.5-8.4 5.9-11.1"
              />
              <path
                className="sst125"
                d="M979.6 591.7c0 .8-.7 1.2-2.1 1.2-1.4 0-2.5-.6-2.5-1.4 0-.4-3.5-10.8-9.5-11.8-4.2-.7 2.8-7.4 12-7.4 8.5 0 15.7 7 11.5 7.4-5.3.5-9.4 11.6-9.4 12z"
              />
              <path
                className="sst256"
                d="M971.5 576c1.4 1.7 3 4.3 3.6 6.4M966.1 580c2.5.6 4.6 2.5 6 4.6 1.4 2.2 2.3 4.6 3.1 7.1M979.4 591.7c0-3.9 5.4-10 10.1-12.2M977.7 586.9c.4-1.7 2.5-8.4 5.9-11.1"
              />
              <path
                className="sst65"
                d="M989.9 508c0-.3-.2-1.4-.2-1.7-1-10.5-20.7-12-24.2.8-.4 1.5-.5 2.7-.4 3.3.3 1.2 3.2 3.6 13.9 3 11.8-.6 10.9-3.6 10.9-5.4z"
              />
              <path
                className="sst65"
                d="M976 475.1s2.5-5.1 6.8-6.3c0 0 3.1 1.2 3 9.6 0 0 6 4.2 4.6 12.5s-8 9.7-11.8 10.8c-4.3 1.1-14.2 3.6-18.3-2.1-1.3-1.9-3.1-4.9-2.4-9.8 0 0-5-4.3-3.2-12.9 0 0 3.2-2.2 10.5 3.2 0 0 .1-2-1.8-4.8 0 0 3 .4 5.4 4 0 0-.2-3.2.8-5.3 0 0 1.2 2.7 3.8 4.7 0 0-1.4-5.1 1.4-7.2 0 0 .6 4.7 2.2 5.5"
              />
              <path
                className="sst44"
                d="M957.2 480.4c-.7 2.7.9 4.6 2.1 5.2M959.6 481c.6.5 1.1 1 1.5 1.6M959.3 486.9c0-.5.2-1.1.5-1.5.7-1.3 1.7-2.4 2.8-3.4M980.7 474.7c-.4.5-.7 1.2-.7 1.9M982.1 471.8c1.7 2.4 1.2 4.6 1 5.4M979.1 476.6c1.6.8 3.3 1.3 5 1.3M969.9 487.3l.9 3.5M978.2 484.9l.9 3.5"
              />
              <ellipse
                transform="rotate(-15.094 975.798 491.503)"
                className="sst17"
                cx={975.8}
                cy={491.5}
                rx={2}
                ry={1.4}
              />
              <path
                d="M974.7 494.7c.6 5.6 6.3 3.8 4.4-1.3"
                style={{
                  fill: "#a9e4ff",
                  stroke: "#222",
                  strokeWidth: 1.92,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                className="sst44"
                d="M972.2 493.7c.5 2 4.7 1.1 4.1-1.2.4 1.8 3.8 1.3 4-1M954.4 492.1c1.2 2.2 4.8 2.6 5.9 1.5M954.4 496.7c1.7.8 4.5 1.3 5.8-.1M957.1 501.1c1.9 0 3.8-1.2 4.8-2.8M987.5 484.7c2 0 3.9-1.2 4.8-3.1M988.4 487.2c1.7.4 3.5.2 5-.5M988.7 490c1.4.8 3.2.8 4.8.2"
              />
              <path
                className="sst125"
                d="M948.7 569.9c-3.1-2.4-4.5-6.3-3.5-10.1 2.1-7.5 5.2-19.6 11.9-15.4.5-9.1 5.1-25.4 17.6-20.4h4.9c12.5-5 17.1 11.3 17.6 20.4 6.6-4.3 9.8 7.9 11.9 15.4 1 3.7-.3 7.7-3.5 10.1-4.5 3.4-13 5.2-19.5 6-5.8.8-11.7.8-17.5 0-6.6-.9-15.4-2.6-19.9-6z"
              />
              <path
                className="sst44"
                d="M948.7 569.9c-3.1-2.4-4.5-6.3-3.5-10.1 2.1-7.5 5.2-19.6 11.9-15.4.5-9.1 5.1-25.4 17.6-20.4h4.9c12.5-5 17.1 11.3 17.6 20.4 6.6-4.3 9.8 7.9 11.9 15.4 1 3.7-.3 7.7-3.5 10.1-4.5 3.4-13 5.2-19.5 6-5.8.8-11.7.8-17.5 0-6.6-.9-15.4-2.6-19.9-6zM970.4 506.5c-.7 2-1.2 4-1.5 6.1M984.9 504.5c.5.4 2 4.9 1.9 7"
              />
              <path
                d="M1024.6 562.3c6.3-16.5-18.2-32.9-18.5-33.2-1.9-1.6-3.8-3.2-5.3-5.2-1.8-2.4-3.1-5.1-3.2-8.1 0-2.7.9-5.3 1.6-8 .7-2.6 1.2-5.5 0-8-1.5-3.4-5.4-5-9-5.4-3.1-.3-6.3 0-9.3 1-1.2.4-2.4 1.1-2.9 2.3 2.2-.9 5-1 6.6.8.9 1 1.2 2.3 1.2 3.6.2 4.5-2 8.7-3.9 12.9-1.4 3-2.6 6-3.6 9.1-1 3.5-1.6 7.2-.9 10.8 3.2 16.1 15.5 20.8 24.2 20.6.5 0 16.9-2.1 11.7 20.2"
                style={{
                  opacity: 0.7,
                  fill: "#a9e4ff",
                  enableBackground: "new",
                }}
              />
              <path
                className="sst44"
                d="M1004.1 555.5c-9.3.7-23.2-3.6-26.5-20.7-.7-3.6-.1-7.2.9-10.8.9-3.1 2.2-6.2 3.6-9.1 1.9-4.1 4.1-8.3 3.9-12.9 0-1.3-.3-2.6-1.2-3.6-1.6-1.8-4.4-1.7-6.6-.8.5-1.2 1.6-1.9 2.9-2.3 3-1 6.2-1.3 9.3-1 3.6.4 7.5 2.1 9 5.4 1.1 2.5.7 5.4 0 8s-1.7 5.2-1.6 8c0 2.9 1.3 5.8 3.2 8.1 1.8 2.4 4.1 4.2 6.4 6M1009.1 556.7c5.4 4.1 7 12.4 4.3 18.3M1014.9 536.4s13.6 11.6 9.7 25.7M967.8 549.8h0c-.7-1.2-2.4-1.2-3.1-.1-2.9 4.4-3.6 9.2-4.5 14.2M973.5 526.7c-5.6-3-9.8 13.4-10.2 19M980 551.3c.8-.3 1.7.1 2.2.8.5.6.8 1.4 1 2.3.9 3.6 1 7.3.4 10.9M986.5 558.5c.3 2.6.3 5.3-.1 8"
              />
              <path
                className="sst125"
                d="M1025.3 577.9c0 .8-.7 1.2-2.1 1.2s-2.5-.6-2.5-1.4c0-.4-3.5-10.8-9.5-11.8-4.2-.7 2.8-7.4 12-7.4 8.5 0 15.7 7 11.5 7.4-5.3.5-9.4 11.6-9.4 12z"
              />
              <path
                className="sst256"
                d="M1017.2 562.3c1.4 1.7 3 4.3 3.6 6.4M1011.8 566.2c2.5.6 4.6 2.5 6 4.6 1.4 2.2 2.3 4.6 3.1 7.1M1025.1 577.9c0-3.9 5.4-10 10.1-12.2M1023.4 573.1c.4-1.7 2.5-8.4 5.9-11.1"
              />
              <circle className="sst26" cx={916.9} cy={533.9} r={1.4} />
              <circle className="sst26" cx={941.1} cy={524.5} r={1.4} />
              <circle className="sst26" cx={1035.6} cy={559.1} r={1.4} />
              <circle className="sst26" cx={920.8} cy={557.5} r={1.4} />
              <circle className="sst26" cx={961.6} cy={581.1} r={1.4} />
              <circle className="sst26" cx={916.9} cy={539} r={0.8} />
              <circle className="sst26" cx={942.8} cy={557.7} r={0.8} />
              <circle className="sst26" cx={916.8} cy={561.4} r={0.8} />
              <circle className="sst26" cx={966.1} cy={571.5} r={0.8} />
              <circle className="sst26" cx={989.9} cy={583.7} r={0.8} />
              <circle className="sst26" cx={970.5} cy={569.9} r={0.8} />
              <circle className="sst26" cx={919.8} cy={571.9} r={0.8} />
              <circle className="sst26" cx={945.3} cy={528.8} r={0.8} />
              <circle className="sst26" cx={1034.3} cy={553.3} r={0.8} />
              <circle className="sst26" cx={1011.3} cy={581.1} r={0.8} />
              <circle className="sst26" cx={1040.4} cy={565.3} r={0.8} />
              <circle className="sst26" cx={947.8} cy={523.9} r={0.8} />
              <circle className="sst26" cx={912.4} cy={536.1} r={0.5} />
              <circle className="sst26" cx={915.2} cy={555.4} r={0.5} />
              <circle className="sst26" cx={988.9} cy={587.1} r={0.5} />
              <circle className="sst26" cx={1039.7} cy={556.1} r={0.5} />
              <circle className="sst26" cx={1020.7} cy={523.1} r={0.5} />
              <circle className="sst26" cx={1041.1} cy={532.4} r={1.4} />
              <circle className="sst26" cx={1014.6} cy={523.9} r={1.4} />
              <circle className="sst26" cx={1036.2} cy={535.8} r={0.8} />
              <circle className="sst26" cx={1036.7} cy={529.8} r={0.5} />
              <circle className="sst26" cx={1012.2} cy={577.9} r={0.5} />
              <circle className="sst26" cx={950.7} cy={530.5} r={0.5} />
              <circle className="sst26" cx={946} cy={561.1} r={0.5} />
            </g>
          </g>
          <path
            className="st259"
            d="M572.7 704.8c.1 1.2.2 2.3.3 3.5-2.4-3.2-5.8-5.6-9.4-6.6.6 1.2 1.3 2.4 2.2 3.4-4.1-2.1-8.8-2.5-13-1.2 2.7 2.1 5.3 4.2 8 6.4-1.1-.1-2.1.1-3 .7 2.9 1.9 6 3.5 9.3 4.6-.8-.1-1.7 0-2.5.2 2.5 2.5 5.6 4.3 8.8 5.3-.7 0-2.2.7-2.2 1.3 0 .5 3.3 1.2 4.8.4 1.1-.5 2.8-1 3.1-2.4.2-1.4-1.8-7.6-2.5-9.6-1-2.3-2.3-4.3-3.9-6z"
          />
          <path
            className="st259"
            d="M580.1 702c-.1 1.2-.2 2.3-.3 3.5 2.4-3.2 5.8-5.6 9.4-6.6-.6 1.2-1.3 2.4-2.2 3.4 4.1-2.1 8.8-2.5 13-1.2-2.7 2.1-5.3 4.2-8 6.4 1.1-.1 2.1.1 3 .7-2.9 1.9-6 3.5-9.3 4.6.8-.1 1.7 0 2.5.2-2.5 2.5-5.6 4.3-8.8 5.3.7 0 2.2.7 2.2 1.3 0 .5-3.3 1.2-4.8.4-1.1-.5-2.8-1-3.1-2.4-.2-1.4 1.8-7.6 2.5-9.6.9-2.3 2.3-4.4 3.9-6z"
          />
          <path
            className="st259"
            d="M555.5 715.6c1.2.4 2.4.8 3.7 1.2-4.3 1.3-8.2 4.1-10.7 7.8 1.5-.1 3-.4 4.4-1-3.8 3.7-6.2 8.9-6.5 14.3l9.9-6.3c-.5 1.2-.7 2.5-.5 3.8 3.2-2.4 6-5.3 8.5-8.5-.4.9-.7 1.9-.8 2.9 3.6-1.7 6.8-4.4 9.1-7.7-.3.7-.2 2.7.5 3.1.5.2 2.5-3.2 2.4-5.4-.1-1.5.1-3.7-1.2-4.6-1.4-.9-8.7-1.4-11-1.3-2.7 0-5.4.6-7.8 1.7z"
          />
          <path
            className="st259"
            d="M595 715.2c-1.2.4-2.4.8-3.7 1.2 4.3 1.3 8.2 4.1 10.7 7.8-1.5-.1-3-.4-4.4-1 3.8 3.7 6.2 8.9 6.5 14.3l-9.9-6.3c.5 1.2.7 2.5.5 3.8-3.2-2.4-6-5.3-8.5-8.5.4.9.7 1.9.8 2.9-13.6-4.2-15.7-10.2-14.4-11.1 1.4-.9 6.4-6 14.6-4.8 2.8.2 5.4.5 7.8 1.7z"
          />
          <path
            className="st260"
            d="M582.4 761.5c.1 3-2.8 5.5-6.4 5.6-3.6.1-6.8-2.2-6.9-5.1 0-1.7 2.4-14.5 3.3-26.8.7-9.4-.4-19.2 1.2-19.2 1.8 0 5.3 10.3 7 21.4 1.7 11 1.7 22.6 1.8 24.1z"
          />
          <path
            className="st261"
            d="M577 718c0 3-1.7 5-4.8 5-3 0-5.4-1.9-5.4-4.9s2.4-5.2 5.4-5.2c3 0 4.8 2 4.8 5.1z"
          />
          <path
            className="st261"
            d="M582 722.6c0 2.8-1.6 4.7-4.5 4.7-2.8 0-5-1.7-5-4.6s2.2-4.9 5-4.9c2.9 0 4.5 2 4.5 4.8z"
          />
          <path
            className="st3"
            d="M572.7 731.6c.9.6 2 1 3.1.9s2.2-.5 3-1.2M572.1 740.5c.2.6.8.9 1.4 1.1 1.2.4 2.5.8 3.9.6 1.3-.1 2.6-.7 3.5-1.7M571.1 749.4c.8 2.9 9.9 2.6 10.5-.2M569.7 758.8c2.2 6.2 12.1 4.3 12.5.8"
          />
          <path
            className="st259"
            d="M600 742.7c.1 1.2.2 2.3.3 3.5-2.4-3.2-5.8-5.6-9.4-6.6.6 1.2 1.3 2.4 2.2 3.4-4.1-2.1-8.8-2.5-13-1.2 2.7 2.1 5.3 4.2 8 6.4-1.1-.1-2.1.1-3 .7 2.9 1.9 6 3.5 9.3 4.6-.8-.1-1.7 0-2.5.2 2.5 2.5 5.6 4.3 8.8 5.3-.7 0-2.2.7-2.2 1.3 0 .5 3.3 1.2 4.8.4 1.1-.5 2.8-1 3.1-2.4.2-1.4-1.8-7.6-2.5-9.6-.8-2.3-2.2-4.3-3.9-6z"
          />
          <path
            className="st259"
            d="M607.5 739.9c-.1 1.2-.2 2.3-.3 3.5 2.4-3.2 5.8-5.6 9.4-6.6-.6 1.2-1.3 2.4-2.2 3.4 4.1-2.1 8.8-2.5 13-1.2-2.7 2.1-5.3 4.2-8 6.4 1.1-.1 2.1.1 3 .7-2.9 1.9-6 3.5-9.3 4.6.8-.1 1.7 0 2.5.2-2.5 2.5-5.6 4.3-8.8 5.3.7 0 2.2.7 2.2 1.3 0 .5-3.3 1.2-4.8.4-1.1-.5-2.8-1-3.1-2.4s1.8-7.6 2.5-9.6c.9-2.3 2.2-4.4 3.9-6z"
          />
          <path
            className="st259"
            d="M582.9 753.6c1.2.4 2.4.8 3.7 1.2-4.3 1.3-8.2 4.1-10.7 7.8 1.5-.1 3-.4 4.4-1-3.8 3.7-6.2 8.9-6.5 14.3l9.9-6.3c-.5 1.2-.7 2.5-.5 3.8 3.2-2.4 6-5.3 8.5-8.5-.4.9-.7 1.9-.8 2.9 3.6-1.7 6.8-4.4 9.1-7.7-.3.7-.2 2.7.5 3.1.5.2 2.5-3.2 2.4-5.4-.1-1.5.1-3.7-1.2-4.6-1.4-.9-8.7-1.4-11-1.3-2.7-.1-5.4.5-7.8 1.7z"
          />
          <path
            className="st259"
            d="M622.4 753c-1.2.4-2.4.8-3.7 1.2 4.3 1.3 8.2 4.1 10.7 7.8-1.5-.1-3-.4-4.4-1 3.8 3.7 6.2 8.9 6.5 14.3l-9.9-6.3c.5 1.2.7 2.5.5 3.8-3.2-2.4-6-5.3-8.5-8.5.4.9.7 1.9.8 2.9-13.6-4.2-15.7-10.2-14.4-11.1 1.4-.9 6.4-6 14.6-4.8 2.8.3 5.4.6 7.8 1.7z"
          />
          <path
            className="st260"
            d="M609.8 799.4c.1 3-2.8 5.5-6.4 5.6-3.6.1-6.8-2.2-6.9-5.1 0-1.7 2.4-14.5 3.3-26.8.7-9.4-.4-19.2 1.2-19.2 1.8 0 5.3 10.3 7 21.4 1.7 11 1.7 22.6 1.8 24.1z"
          />
          <path
            className="st262"
            d="M604.4 755.9c0 3-1.7 5-4.8 5s-5.4-1.9-5.4-4.9 2.4-5.2 5.4-5.2 4.8 2 4.8 5.1z"
          />
          <path
            className="st262"
            d="M609.4 760.6c0 2.8-1.6 4.7-4.5 4.7-2.8 0-5-1.7-5-4.6s2.2-4.9 5-4.9c2.9-.1 4.5 1.9 4.5 4.8z"
          />
          <path
            className="st3"
            d="M600.1 769.4c.9.6 2 1 3.1.9 1.1 0 2.2-.5 3-1.2M599.5 778.4c.2.6.8.9 1.4 1.1 1.2.4 2.5.8 3.9.6 1.3-.1 2.6-.7 3.5-1.7M598.5 787.3c.8 2.9 9.9 2.6 10.5-.2M597.1 796.7c2.2 6.2 12.1 4.3 12.5.8"
          />
        </g>
      </svg>
    </Box>
  )
}
