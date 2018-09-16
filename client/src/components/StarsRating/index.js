import React, { PureComponent } from 'react';
import Rating from 'react-rating';

import './styles.css';


class StarsRating extends PureComponent {
    state = {
        hower: null
    }

    emptySymbol = <i className="far fa-star star-empty"></i>;

    fullSymbol = <i className="fas fa-star star-full"></i>;

    handleRating = (rating) => {
        this.props.onChange(rating);
    }

    handleHower = (hower) => {
        this.setState({ hower })
    }

    getLabel(rating) {
        switch (rating) {
            case 1: return 'Hated it!';
            case 2: return 'Disliked it!';
            case 3: return 'It was ok.';
            case 4: return 'Liked it!';
            case 5: return 'Loved it!';
            default: return 'Rate your trip:';
        }
    }

    render() {
        const { hower } = this.state;
        const { rating } = this.props;

        return (
            <div className="stars-rating-container">
                <label className="rating-label">{this.getLabel(hower || rating)}</label>
                <Rating
                    initialRating={rating}
                    emptySymbol={this.emptySymbol}
                    fullSymbol={this.fullSymbol}
                    onChange={this.handleRating}
                    onHover={this.handleHower}
                />
            </div>
        );
    }
}

export default StarsRating;