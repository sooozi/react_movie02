import PropTypes from 'prop-types';

export const MoviePropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    // 필요한 다른 필드들을 추가하세요.
};
