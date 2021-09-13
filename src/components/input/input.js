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

       
        let classes = `input ${error ? 'error' : ''} ${size ? size : 'md'} ${multiline ? 'hidden' : ''} ${startIcon || endIcon ? 'ic' : ''}`;
        let label = error ? <div className="label err">Label</div> : <div className="label">Label</div>;
        let helpText = error ? <div className="helper-text err">{helperText}</div> : <div className="helper-text">{helperText}</div> ;
        let container = fullwidth ? `input-wrapper full` : `input-wrapper`;
        let textAr = multiline ? <textarea className="input" cols="25" rows={rows} placeholder="Placeholder"></textarea> 
                : <textarea className="input hidden" cols="25" rows={rows} placeholder="Placeholder"></textarea> ;
        let icon = startIcon ? <i className="fas fa-phone startic"></i> 
                : endIcon ? <i className="fas fa-lock endic"></i> : null ;

        classes = classes.replace('  ', ' ').trim();

        return(
            <div className={container}>
                {label}
                <input className={classes} type="text" 
                    disabled={disabled} 
                    placeholder="Placeholder" 
                    onFocus={this.changeLabel} 
                    onBlur={this.reChangeLabel} 
                    value={value} maxLength="18"/>
                {icon}
                {textAr}
                {helpText}
            </div>
            
        )
    }
}