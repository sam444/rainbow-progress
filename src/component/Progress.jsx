import {Component} from "rainbowui-core";
import {Util} from "rainbow-foundation-tools";
import PropTypes from "prop-types";

export default class Progress extends Component {
    render() {
        let tempClass = 'progress-bar ';
        if (this.props.styleClass) {
            tempClass += 'bg-' + this.props.styleClass;
        }
        if (Util.parseBool(this.props.striped)) {
            tempClass += ' progress-bar-striped';
        }
        if (Util.parseBool(this.props.animated)) {
            tempClass += ' progress-bar-animated';
        }

        let tempStyle = {
            width: this.props.value + '%',
            height: this.props.height
        };

        return (
            <div className="progress">
                <div className={tempClass} style={tempStyle}>{this.props.value}%</div>
            </div>
        );
    }
};

Progress.propTypes = {
    id: PropTypes.string,
    styleClass: PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "info"]),
    striped: PropTypes.oneOf([PropTypes.string, PropTypes.bool]),
    animated: PropTypes.oneOf([PropTypes.string, PropTypes.bool]),
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOf([PropTypes.string, PropTypes.number])
};

Progress.defaultProps = {
    styleClass: 'default',
    striped: true,
    animated: true,
    value: 0,
    height: '1rem'
};