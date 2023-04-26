import { Fragment } from "react";

function ARFooters() {
  return (
    <Fragment>
      <section className="container Frequently">
        <div className="row Frequently text-center">
          <h2 className="col-md-12">أسئله متكرره</h2>
          <div className="col-md-6">
            أحد أهم الطرق من أجل إدارة المطعم أو المقهى (إدارة كافه) بشكل
            احترافي هي الحصول على رضا العملاء ومعرفة آرائهم واحتياجاتهم. إحدى
            الطرق الذكية لاكتشاف احتياجات عملاء مطعم أو مقهى واهتماماتهم
            وأذواقهم والقيام بدراسة تسويقية ناجة لمطعم أو مقهى هي إجراء مسح أو
            استبيان قياس رضا العملاء
          </div>
          <div className="col-md-6">
            يأتي عميلك إلى مطعمك بالصدفة أو عن طريق تقديم المطعم له من قِبل
            أصدقائه ويستخدم خدمة الطعام الخاصة بك، لكن هل تتركه يغادر المطعم دون
            أن يترك أي أثر لديك؟ أم تتواصل معه وتجد طريقة لجعله يطلب الطعام من
            مطعمك وحتى تفهم احتياجاته بشكل أفضل من خلال بعض الأسئلة الهادفة؟
          </div>
          <div className="col-md-6">
            فيما مضى كان توزيع قائمة طعام المطعم أو إرسال شخص يرتدي زي دمية إلى
            باب المطعم جزءاً من عملية التسويق والإعلان في المطعم، لكن مدراء
            المطاعم والمقاهي يعلمون اليوم أن مثل هذه الإجراءات لم تعد فعالة.
          </div>
          <div className="col-md-6">
            فيما مضى كان توزيع قائمة طعام المطعم أو إرسال شخص يرتدي زي دمية إلى
            باب المطعم جزءاً من عملية التسويق والإعلان في المطعم، لكن مدراء
            المطاعم والمقاهي يعلمون اليوم أن مثل هذه الإجراءات لم تعد فعالة.
          </div>
        </div>
      </section>
      <section className="container Hurry_up">
        <div className="row text-center mt-5">
          <h2 className="col-med-12">
            أسرع - بسرعة! اشترك في معانا الان لدينا واحصل على 25٪ خصم
          </h2>
          <p className="col-med-12">
            اسرع بكتابه بياناتك بالاسف هنا و اميلك الالكتروني و لا تتردد{" "}
          </p>
          <div className="container">
            <div className="row">
              <input
                className="col-med-6"
                type="text"
                placeholder="Emil Address here"
              />
              <button type="submit" className="col-med-6">
                أشترك الأن
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="last_footer text-center">
        <div className="row">
          <div className="col-12 linko">
            <ul>
              <a href="/ar"> تسجيل </a>
              <a href="/ar"> المنتدى </a>
              <a href="/ar"> تابع </a>
              <a href="/ar"> التعلميات </a>
            </ul>
          </div>
          <div className="col-12 social">
            <ul>
              <a href="/ar">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="/ar">
                <i className="fa-brands fa-facebook-f"></i>{" "}
              </a>
              <a href="/ar">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="/ar">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="/ar">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </ul>
          </div>
          <div className="col-12 color-white">
            <p>© 2023. OVCE Foods .كل الحقوق محفوظة </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ARFooters;
