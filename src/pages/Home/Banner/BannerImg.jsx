import img1 from '../../../assets/Banner/banner1.jpg'
import img2 from '../../../assets/Banner/banner2.jpg'
import img3 from '../../../assets/Banner/banner3.jpg'
import img4 from '../../../assets/Banner/banner4.jpg'
import img5 from '../../../assets/Banner/banner5.jpg'

const BannerImg = () => {
    return (
        <div className='sm:flex items-center gap-4'>
            <div>
                <img className='rounded-md' src={img1} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <img className='rounded-md' src={img2} alt="" />
                <img className='rounded-md' src={img3} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <img className='rounded-md' src={img4} alt="" />
                <img className='rounded-md' src={img5} alt="" />
            </div>
        </div>
    );
};

export default BannerImg;