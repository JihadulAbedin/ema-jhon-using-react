import BannerDetails from '../bannerDetails/BannerDetails';
import BannerImage from '../bannerImage/BannerImage';
import './banner.css'

const Banner = () => {
    return (
        <div className='bannerWrapper container mx-auto'>
            <BannerDetails></BannerDetails>
            <BannerImage></BannerImage>
        </div>
    );
};

export default Banner;