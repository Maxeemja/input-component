import React, {Component} from 'react';

export default class Button extends Component {
    
    
    

    render(){
        
        const {variant, size, color, startIcon, endIcon, disabled, disableshadow, children } = this.props

        let startic = ``;
        let endic = ``;
        let classes = ``;
        if(variant && !disableshadow){
            classes = `${variant}`
        } else {
            classes = `default`
        }
        if(size){
            classes += ` ${size}`;
        }
        if(color){
            classes = `color-${color}`;
        }
        if(disableshadow){
            classes = `disable-shadow`
        }
        if(startIcon){
            startic = <i className={`fas ${startIcon}`}></i>
        } 
        if(endIcon){
            endic = <i className={`fas ${endIcon}`}></i>
        } 
        return(
            <button className={classes} disabled={disabled} disableshadow={disableshadow} startIcon={startIcon}>
                {startic}  {children}  {endic}
            </button>
        )
    }

}