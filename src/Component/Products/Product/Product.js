import React, {useState} from "react";
import style from './Product.module.css'
import Cat from './../../../assets/image/Cat.png'

function Products({withTaste, portion, gift, extra, kg, selected}) {

    const [show, setShow] = useState(false)
    const [active, setActive] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const onMouseEnter = () => {
        if (!disabled) {
            if (active) {
                setShow(true)
            }
        }
    }
    const onMouseLeave = () => {
        if (!disabled) {
            if (active) {
                setShow(false)
            }
        }
    }
    const onClickHandler = () => {
        if (!disabled) {
            setActive(!active)
            setShow(false)
        }
    }
    const onClickHandlerDisabled = () => {
        setDisabled(!disabled)
    }

    const circleHandler = (kg) => {
        return <>
            <div className={style.kgNumber}>{kg}</div>
            <div className={style.kg}>кг</div>
        </>
    }

    const boxTopHandler = (withTaste, portion, gift, extra) => {
        return <div className={style.paddingLeft}>
            <div>
                {show
                    ? <div className={style.redText}>Котэ не одобряет?</div>
                    : <div className={style.textTop}>Сказочное заморское явство</div>}
            </div>
            <h2 className={style.title}>Нямушка</h2>
            <div className={style.tasty}>с {withTaste} </div>
            <div className={style.textBox}>
                <div className={style.text}>{`${portion} порций`}</div>
                <div className={style.text}>{gift} в подарок</div>
                <div className={style.text}>{extra}</div>
            </div>
        </div>
    }

    const boxBottomHandler = (kg) => {
        return <div className={style.catAndCircle}>
            <img src={Cat} className={style.cat}/>
            {disabled
                ? <div className={`${style.circle} ${style.circleGray}`}>
                    {circleHandler(kg)}</div>
                : <div
                    className={active ? `${style.circle} ${style.circleRed}` : `${style.circle} ${style.circleBlue}`}>
                    {circleHandler(kg)} </div>
            }
        </div>
    }
    return (
        <div>
            {disabled ? <div className={`${style.box} ${style.boxDisabled}`} onMouseEnter={onMouseEnter}
                             onMouseLeave={onMouseLeave}
                             onClick={onClickHandler}>
                {disabled && <div className={style.disable}></div>}
                {boxTopHandler(withTaste,portion,gift,extra)}
                {boxBottomHandler(kg)}
            </div> : <div className={active ? `${style.box} ${style.boxActive}` : style.box} onMouseEnter={onMouseEnter}
                               onMouseLeave={onMouseLeave}
                               onClick={onClickHandler}>
                {boxTopHandler(withTaste,portion,gift,extra)}
                {boxBottomHandler(kg)}
            </div> }

            <div>
                {disabled ? <div className={style.yellowText}>Печалька, с {withTaste} закончилос</div> :
                    <div> {active
                        ? <div className={style.textBottom}>{selected}</div>
                        : <div className={style.textBottom}>Чего сидишь? Порадуй котэ, <span onClick={onClickHandler}
                                                                                             className={style.buy}>купи</span>
                        </div>
                    }
                    </div>}
            </div>
            <button onClick={onClickHandlerDisabled} className={style.button}>закончилось</button>
        </div>
    );
}

export default Products;
