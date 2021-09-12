import React, {Component} from 'react';

export default class Input extends Component {


    changeLabel(e){
        e.target.previousElementSibling.classList.add('focus');
    }
    reChangeLabel(e){
        e.target.previousElementSibling.classList.remove('focus');
    }
    hide(){
        const input = document.querySelector('input');
        input.classList.add('hidden');
    }
    render(){
        const {disabled, error, value, helperText, startIcon, size, fullwidth, rows , multiline, endIcon} = this.props;

       
        let classes = `input`;
        let label = <div className="label">Label</div>;
        let placeh = `Placeholder`;
        let helpText = <div className="helper-text">{helperText}</div>
        let container = `input-wrapper`;
        let textAr = <textarea className="input hidden" cols="25" rows={rows} placeholder="Placeholder"></textarea> ;
        let icon = ``;
        if(size){
            classes += ` ${size}`
        } else {
            classes += ` md`
        }
        
        if(multiline){
            textAr = <textarea className="input" cols="25" rows={rows} placeholder="Placeholder"></textarea> ;
            classes += ` hidden`
        }

        if(error){
            classes += ` error`;
            label = <div className="label err">Label</div>;
            helpText = <div className="helper-text err">{helperText}</div>
        }
        if(startIcon){
            classes += ` ic`
            icon = <i class="fas fa-lock"></i>; 
        }
        if(endIcon){
            classes += ` ic`;
            icon = <i class="fas fa-lock endic"></i>;
        }
        if(fullwidth){
            container += ` full`
        }
        return(
            <div className={container}>
                {label}
                {icon}
                <input className={classes} type="text" 
                    disabled={disabled} 
                    placeholder={placeh} 
                    onFocus={this.changeLabel} 
                    onBlur={this.reChangeLabel} 
                    value={value} />
                {textAr}
                {helpText}
            </div>
            
        )
    }
}