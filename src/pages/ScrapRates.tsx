import { useState } from 'react'
import { categories } from '../constants';

const ScrapRates = () => {
    document.title = 'Scrap Rates | Scrapbag';
    const [activeContentIndex, setActiveContentIndex] = useState(0);
    const [details, setDetails] = useState<Category>(categories[0]);

    interface Category {
        id: number;
        name: string;
        image: string;
        description: string;
        subCategories: SubCategory[];
    }

    interface SubCategory {
        name: string;
        price: string;
    }

    const handleClick = (category: Category) => {
        setActiveContentIndex(category.id);
        setDetails(category);
    }

    return (
        <div className='bg-white'>

            <div className="md:-mx-[300px] font-Lato">
                <div className="bg-defaultLime w-full h-full top-0 left-0 pt-[82px] md:pt-[60px] md:rounded-custom pb-7 lg:pb-0" >
                    <div className="relative">
                        <div className="container">
                            <div className="items-center justify-center flex flex-wrap lg:h-[500px] md:py-0 xl:gap-64">
                                <div className="heading mb-0 lg:text-left text-center">
                                    <div className='!text-white font-semibold text-base'>Scrap Rates</div>
                                    <div className="text-white text-2xl lg:text-[40px] font-bold mt-5">Live Scrap Market Rates</div>
                                    <p className="max-w-[450px] text-white text-[20px] font-normal mt-5">plar och sasamma. Autos lujåktig. Syhyska nobelt i pseudol, trins tede. Posävis ber or. Dor diasest.</p>
                                </div>
                                <div className="relative mt-5 md:mt-0" data-aos='fade-left' data-aos-duration="1000">
                                    <img className="h-[18rem]" src="/assets/images/illustration_scrapRates.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mt-14 lg:pl-4">
                <div>
                    <div className='flex flex-wrap items-center justify-center text-center font-HindMysuru gap-6'>
                        {categories.map((category, index) => (
                            <div key={index}>
                                <button type="button" className={`${activeContentIndex == index ? "bg-defaultLime text-white" : ""}
                                px-[33px] py-2 rounded-lg font-bold text-[13.5px] text-[#464646] hover:bg-defaultLime hover:text-white transition duration-500`}
                                    onClick={() => handleClick(category)}
                                >
                                    {category.name}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div>
                        {details && (
                            <div className="flex flex-col items-center justify-center mt-20 pl-7">
                                <div data-aos="fade-up" data-aos-duration="1800"  className="flex flex-wrap items-center justify-center rounded-3xl border border-transparent bg-white transition duration-500 font-Lato gap-14">
                                    <img src={details.image} alt="blog-1" className="w-[300px] h-56 rounded-3xl object-cover" />
                                    <div className="max-w-[400px] text-center md:text-left">
                                        <h5 className="my-[20px] block text-[32px] text-zinc-700 font-bold line-clamp-2">
                                            {details.name}
                                        </h5>
                                        <p className="font-medium text-zinc-500 text-[19.5px]">{details.description}</p>
                                    </div>
                                </div>


                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-HindMysuru gap-8 my-16">
                                    {
                                        details.subCategories.map((subCategory, index) => (
                                            <div className='bg-defaultLime text-white font-bold rounded-3xl px-[75px] py-2 text-center'>
                                                <div className="text-[14.5px]">
                                                    {subCategory.name}
                                                </div>
                                                <div className="text-[19px]">
                                                    ₹{subCategory.price}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ScrapRates
