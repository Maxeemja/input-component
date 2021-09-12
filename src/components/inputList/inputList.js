import React, {Component} from 'react';
import Input from '../input/input';
export default class InputList extends Component {
    render(){
        return(
            <>
                {/* Section 1 */}
                <div className="small-title">Variants</div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input /&gt;</div>
                        <Input />
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input error/&gt;</div>
                        <Input error/>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input disabled/&gt;</div>
                        <Input disabled />
                    </div>
                </div>
                {/* Section 2 */}
                <div className="small-title">Helper Text</div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input helperText="Some help text"/&gt;</div>
                        <Input helperText="Some help text" />
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input helperText="Some help text" error/&gt;</div>
                        <Input helperText="Some help text" error/>
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input value="Text"/&gt;</div>
                        <Input value="Text"/>
                    </div>
                </div>
                <div className="small-title">Icons</div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input startIcon /&gt;</div>
                        <Input startIcon />
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input endIcon /&gt;</div>
                        <Input endIcon/>
                    </div>
                </div>
                {/* Section 3 */}
                <div className="small-title">Sizes</div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input size="sm"/&gt;</div>
                        <Input size="sm" />
                    </div>
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input size="md"/&gt;</div>
                        <Input size="md"/>
                    </div>
                </div>
                {/* Section 4 */}
                <div className="small-title">Fullwidth</div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input fullwidth/&gt;</div>
                        <Input fullwidth/>
                    </div>
                </div>
                {/* Section 5 */}
                <div className="small-title">Multiple Lines</div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="placeholder">&lt;Input multiline rows="5"/&gt;</div>
                        <Input multiline rows="5"/>
                    </div>
                </div>
            </>
        )
    }
}