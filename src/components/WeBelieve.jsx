import React, { useEffect, useState } from 'react'
import "./../assets/css/about.css"
import { mission, values, vision, whymindfullimg } from '../assets/img/about';

const WeBelieve = () => {
    // pointer loop started js
    const points = [
        "Branding",
        "UX/UI",
        "Visual Content Creation",
        "Digital Marketing",
        "Marketing & Advertising",
        "Others"
      ];
      
      const weBelieve = [
        {
          id: '1',
          number: '150+',
          title: 'Happy Customers',
          shadowColor: '#A84A94', 
          numberColor: '#A84A94'  // Matching pink
        },
        {
          id: '2',
          number: '12+',
          title: 'Years of Experience',
          shadowColor: '#1E51B1', // Blue
          numberColor: '#1E51B1'  // Matching blue
        },
        {
          id: '3',
          number: '200+',
          title: 'Project Completed',
          shadowColor: '#11526B', // Light Blue
          numberColor: '#11526B'  // Matching light blue
        },
        {
          id: '4',
          number: '30+',
          title: 'Team Members',
          shadowColor: '#3E1893', // Violet
          numberColor: '#3E1893'  // Matching violet
        },
      ];
      const aboutImag = [
        {
            src:  mission,
            title:  'Mission',
            desc:'To build brand experiences that are thoughtful, bold, and truly impactful.'
        },
        {
          src:  vision,
          title:  'Vision',
          desc:'We don’t settle. We experiment, evolve, and explore new possibilities.'
        },
        {
            src:  values,
            title:  'Values',
            desc:'To lead a mindful revolution in branding, design, and digital storytelling.'
        },
      ]
      const [visiblePoints, setVisiblePoints] = useState(0);
      const [animationCycle, setAnimationCycle] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setVisiblePoints(prev => {
            if (prev >= points.length - 1) {
              // Reset for next cycle
              setTimeout(() => setVisiblePoints(0), 500); // Small delay before restart
              return prev;
            }
            return prev + 1;
          });
        }, 1000);
        return () => clearInterval(timer);
      }, [animationCycle]); // Add animationCycle to dependencies

  return  <>
   <div className='p-4 md:p-10 lg:p-20'>
<div className='ml-14'>

<div className='text-lg md:text-xl text-gray-500 mb-1' style={{fontFamily:'Spartan'}}>We Believe</div>
<div className='text-base md:text-lg text-gray-300 mb-6 max-w-2xl' style={{fontFamily:'Spartan'}}>
  Growth you can see, impact you can  <br className='hidden sm:block' />  measure, success you can believe in.
</div>
{/* </div> */}
</div>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 content-center place-content-center '>
<div className='lg:col-span-2 px-4 md:px-8 lg:px-12'>
<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8'>
  {weBelieve.map((card) => (
    <div 
      key={card.id}
      className="group bg-[#111111] rounded-2xl py-12 w-full transition-all duration-300 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 
                  group-hover:opacity-50 transition-opacity duration-300"
        style={{
          boxShadow: `inset 0 0 50px ${card.shadowColor}`
        }}
      />
      
      <div className='flex flex-col items-center justify-center h-full relative z-10'>
        <div 
          className='text-4xl md:text-5xl lg:text-6xl font-bold transition-colors mb-3 md:mb-5 duration-300'
          style={{ color: card.numberColor }}
        >
          {card.number}
        </div>
        <div className='text-xl md:text-lg text-gray-300 text-center'>
          {card.title}
        </div>
      </div>
    </div>
  ))}
</div>
</div>
<div className=" max-w-2xl ">
      <div style={styles.timelineContainer}>
        {points.map((point, index) => (
          <div
            key={`${animationCycle}-${index}`}
            style={{
              ...styles.timelineItem,
              ...(index <= visiblePoints ? styles.timelineItemVisible : {}),
            }}
          >
            <div style={styles.timelineDot}></div>
            {index < points.length - 1 && (
              <div
                style={{
                  ...styles.timelineConnector,
                  ...(index <= visiblePoints ? styles.timelineConnectorVisible : {}),
                }}
              ></div>
            )}
            <div
              style={{  fontFamily:'Spartan',
                ...styles.timelineContent,
                ...(index <= visiblePoints ? styles.timelineContentVisible : {}),
              }}
            >
              {point}
            </div>
          </div>
        ))}
      </div>
    </div>
</div> 
</div> 
    
    {/* <div className="flex flex-wrap justify-between p-10 md:p-20  min-h-screen">
      {aboutImag.map((item) => (
        <div key={item.id} className="w-full md:w-1/3 px-5 mb-8 md:mb-0 relative">
          <div className="relative">
            <img
              src={item.src|| "/placeholder.svg"}
              alt={item.title}
              width={400}
              height={600}
              className="w-full h-auto"
            />

            <div className="absolute md:bottom-[12%] xl:bottom-[20%] left-0 right-0 text-center md:px-6 xl:px-20 ">
              <h3 className="text-white md:text-xl xl:text-3xl mb-6" style={{fontFamily:'Spartan'}}>{item.title}</h3>
              <p className="text-gray-300 md:text-lg xl:tetx-1xl" style={{fontFamily:'Spartan'}}>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div> */}
    <div className="flex flex-wrap justify-between p-4 md:p-20 bg-[#0a0a2e] min-h-screen">
      {aboutImag.map((item) => (
        <div key={item.id} className="w-full md:w-1/3 px-2 mb-8 md:mb-0 relative">
          <div className="relative">
            <img
              src={item.src|| "/placeholder.svg"}
              alt={item.title}
              width={400}
              height={600}
              className="w-full h-auto" />
            <div className="absolute md:bottom-[10%] xl:bottom-[20%] left-0 right-0 text-center md:px-6 xl:px-20 ">
              <h3 className="text-white md:text-xl xl:text-3xl mb-6" style={{fontFamily:'Spartan'}}>{item.title}</h3>
              <p className="text-gray-300 md:text-lg xl:tetx-1xl" style={{fontFamily:'Spartan'}}>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </>
}

export default WeBelieve


// Styles object
const styles = {
  timelineContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    position: "relative",
  },
  timelineItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "50px",
    position: "relative",
    opacity: 0,
    transform: "translateY(10px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  },
  timelineItemVisible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  timelineDot: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#080808",
    border: "5px solid white",
    flexShrink: 0,
    zIndex: 2,
  },
  timelineConnector: {
    position: "absolute",
    top: "16px",
    left: "8px",
    height: "calc(100% + 50px)",
    width: "3px",
    backgroundColor: "#e0e0e0",
    zIndex: 1,
    transformOrigin: "top",
    transform: "scaleY(0)",
    transition: "transform 0.5s ease 0.3s",
  },
  timelineConnectorVisible: {
    transform: "scaleY(1)",
  },
  timelineContent: {
    marginLeft: "20px",
    fontSize: "18px",
    fontWeight: 500,
    color: "#333",
    opacity: 0,
    transform: "translateX(10px)",
    transition: "opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s, color 0.3s ease",
  },
  timelineContentVisible: {
    opacity: 1,
    transform: "translateX(0)",
    color: "white",
  },
}