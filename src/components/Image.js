import React, {useState} from "react";
function Image ({src,alt}) {
    const [hovered, setHovered] =useState(false);
    const handleMouseEnter = () =>{
        setHovered(true);
    };
    const handleMouseLeave = () =>{
        setHovered(false);
    }
    return (
        <div 
        style={{
            position:'relative',
            display:'inline-block',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        
        >
            <img src={src} alt={alt}/>
            {hovered && (
                <div
                style = {{
                    position:'absolute',
                    top:0,
                    left:0,
                    width:'100%',
                    height:'100%',
                    backgroundColor:'rgba(0,0,0,0.5)',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <img src={src} alt={alt} style={{maxWidth:'85%',maxHeight:'85%'}}/>
            

        </div>
            )}
            </div>
    )

}
export default Image;