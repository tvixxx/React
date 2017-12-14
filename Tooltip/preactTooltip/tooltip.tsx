import {h, render, Component} from 'preact';
import Portal from 'preact-portal';

interface TooltipProps {
    element: any;
}
interface TooltipState {
    visible?: boolean;
    top?: number | null;
    left?: number | null;
}

const INITIAL_STATE = {
    visible: false,
    top: null,
    left: null
};
const OFFSETS = {TOP: 25, LEFT: 50};

export class Tooltip extends Component<TooltipProps, TooltipState> {

    state: TooltipState = {
        ...INITIAL_STATE
    };

    toggleTooltipState() {
        this.setState({
            visible: !this.state.visible
        });
    }

    resetToggleState() {
        this.setState(INITIAL_STATE);
    }

    onMove = e => this.setState({
        top: e.clientY,
        left: e.clientX
    });

    getStyles = () => ({
        zIndex: (this.state.visible) ? 1000 : -1000,
        visibility: (this.state.visible) ? 'visible' : 'hidden',
        top: (this.state.top || 0) + OFFSETS.TOP,
        left: (this.state.left || 0) - OFFSETS.LEFT,
    });


    render() {
        return (
            <div class="header__wrapper-icon"
                 onMouseEnter={ () => this.toggleTooltipState() }
                 onMouseLeave={ () => this.resetToggleState() }
                 onMouseMove={ () => this.onMove(event) }
            >
                {this.props.children}
                <Portal into="body">
                    <div style={this.getStyles()} class="tooltip">
                        {this.props.element}
                    </div>
                </Portal>
            </div>
        );
    }
}
