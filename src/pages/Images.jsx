import { useState } from "react";
import BlockTitle from "../components/BlockTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/Carousel.scss";
import Slider from "react-slick";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import { useTranslation } from 'react-multi-lang';

const Images = () => {
    const trans = useTranslation();

    const [images, setImages] = useState([
        {
            title: "Mount Everest",
            image: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Andok",
            image: "https://images.pexels.com/photos/1726966/pexels-photo-1726966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Karpatok",
            image: "https://images.pexels.com/photos/1526719/pexels-photo-1526719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Balkan Mountains",
            image: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Scotland",
            image: "https://images.pexels.com/photos/1726966/pexels-photo-1726966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Grand Canyon",
            image: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]);

    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Photographer",
            images: ["https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
            price: 1650,
            isOnDiscount: false,
            discount: null,
            isAvailable: true
        },
        {
            id: 2,
            title: "Hands",
            images: ["https://images.pexels.com/photos/1726966/pexels-photo-1726966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
            price: 1250,
            isOnDiscount: true,
            discount: 650,
            isAvailable: true
        },
        {
            id: 3,
            title: "Product",
            images: ["https://images.pexels.com/photos/1526719/pexels-photo-1526719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
            price: 8950,
            isOnDiscount: true,
            discount: 890,
            isAvailable: true
        },
        {
            id: 4,
            title: "Product title",
            images: ["https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
            price: 6800,
            isOnDiscount: false,
            discount: null,
            isAvailable: true
        },
        {
            id: 5,
            title: "Product name",
            images: ["https://images.pexels.com/photos/1726966/pexels-photo-1726966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
            price: 4590,
            isOnDiscount: true,
            discount: 2980,
            isAvailable: false
        },
        {
            id: 6,
            title: "Umbrella",
            images: ["https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
            price: 2500,
            isOnDiscount: false,
            discount: null,
            isAvailable: true
        },
        {
            id: 7,
            title: "Photograper 2.0",
            images: ["https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
            price: 1250,
            isOnDiscount: false,
            discount: null,
            isAvailable: true
        },
        {
            id: 8,
            title: "Hands 2",
            images: ["https://images.pexels.com/photos/1726966/pexels-photo-1726966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
            price: 1500,
            isOnDiscount: true,
            discount: 900,
            isAvailable: true
        },
        {
            id: 9,
            title: "Product 2",
            images: ["https://images.pexels.com/photos/1526719/pexels-photo-1526719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
            price: 7500,
            isOnDiscount: true,
            discount: 6500,
            isAvailable: true
        },
    ]);

    function SampleNextArrow({ className, onClick }) {
        return (
            <button
            className={className}
            onClick={onClick}
            ><i className="fas fa-chevron-right"></i></button>
        );
    }

    function SamplePrevArrow({ className, onClick }) {
        return (
            <button
            className={className}
            onClick={onClick}
            ><i className="fas fa-chevron-left"></i></button>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className={"valami"} />,
        prevArrow: <SamplePrevArrow className={"valami 2"} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <BlockTitle title={ trans("nav.images") } />

            <Slider {...settings}>
                {
                    images?.map((item, index) => {
                        return (
                            <div className="slide" key={index}>
                                <h5 className="slide-title">{item.title}</h5>
                                <img src={item.image} alt="placeimage" />
                            </div>
                        );
                    })
                }
            </Slider>

            <Products products={products} />

            <ProductDetails product={products[2]} />
        </>
    );
}

export default Images;