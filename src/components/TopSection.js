import style from '../css/topSection.module.css'
import house from '../resource/images/house.png'

function TopSection() {
    return (
        <>
            <div className={style.container}>
                <img src={house} alt="" />
            </div>
        </>
    )
}

export default TopSection;