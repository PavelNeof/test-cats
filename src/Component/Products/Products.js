import React from "react";
import Product from "./Product/Product";
import style from './Products.module.css'
import background from './../../assets/image/Pattern.png'

function Products() {
    return (

         <div style={{ backgroundImage: `url(${background})`}}>
            <div className={style.background}>
                <span className={style.title}>Ты сегодня покормил кота?</span>
                <div className={style.allBox}>
                    <Product withTaste={' фуа-гра'}
                             portion={10}
                             gift={'мышь'}
                             kg={'0,5'}
                             selected={'Печень утки развареная с артишоками.'}/>
                    <Product withTaste={' рыбой'}
                             portion={40}
                             gift={'2 мыши'}
                             kg={'2'}
                             selected={'Головы щучьи с чесноком да свежайшая сёмгушка.'}/>
                    <Product withTaste={' курой'}
                             portion={100}
                             gift={'5 мышей'}
                             extra={'заказчик доволен'}
                             kg={'5'}
                             selected={'Филе из цыплят с трюфелями в бульоне.'}/>
                </div>
            </div>
        </div>
    );
}

export default Products;
