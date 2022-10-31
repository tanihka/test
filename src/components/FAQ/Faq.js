import "./faq.css"
// import "../images/faq.jpg"
import QNA from "./QNA"







const Faq = () => {

    return (
        <>
           <div className="faqWrapper">
           <div className="faq-heading" id="faq">Frequently Asked Questions</div>
            <div className="faq">
                <div className="qna">
                    <QNA />
                </div>
                <div className="img"><img src={require('../../images/FAQs-amico.png')} alt="" /></div>
            </div>
           </div>

        </>
    )

}

export default Faq
