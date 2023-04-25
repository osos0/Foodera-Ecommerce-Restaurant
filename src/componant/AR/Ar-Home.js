import { Fragment } from "react";
// import "../../AR/Ar-Header.css";
import "../../Styles/Ar-Header.css";
// import headimg from "../../Ar-imges/3.jpg";
// import lemon from "../../AR/Ar-imges/1.png";
import lemon from "../../Ar-imges/1.png";
import manyPics from "../../Ar-imges/2.png";

function ARHome() {
  return (
    <Fragment>
      <section className="Good food">
        <div className="container">
          <div className="row ARheader">
            <div className="col-md-6 headflex">
              <h1>الخيارات الغذائية الجيدة هي استثمارات جيدة</h1>
              <p>
                استمتع ياحلى الوجبات السندوتشات المتاحه عندنا و كم هي بالفعل
                لذيذه كما انها متنوعه و شهيه و يجب ان تقوم بتجربتها
              </p>
              <button type="">أطلب الان</button>
              <button className="button2" type="">
                أعرف المزيد
              </button>
            </div>
            <div className="col-md-6">{/* <img src={headimg} alt="" /> */}</div>
          </div>
        </div>
      </section>
      <section className="nums">
        <div className="row text-center section2">
          <div className="col-md-3">
            <h1>1287+</h1>
            <p>حفظ</p>
          </div>
          <div className="col-md-3">
            <h1>5786+</h1>
            <p>صور</p>
          </div>
          <div className="col-md-3">
            <h1>1440+</h1>
            <p>صخور</p>
          </div>
          <div className="col-md-3">
            <h1>7110+</h1>
            <p>جديد</p>
          </div>
        </div>
      </section>
      <section className="ARWepride">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img src={lemon} alt="Pride-img" />
            </div>
            <div className="col-md-5">
              <h2>
                نحن نفخر بأنفسنا لأننا نصنع طعامًا حقيقيًا من الأفضل مكونات
              </h2>
              <p>
                استمتع ياحلى الوجبات السندوتشات المتاحه عندنا و كم هي بالفعل
                لذيذه كما انها متنوعه و شهيه و يجب ان تقوم بتجربتها
              </p>
              <button type="">
                <a href="/aboutme">اعرف المزيد</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ARWemake">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>نصنع كل شيء يدويًا بأفضل المكونات الممكنة </h2>
              <p>
                استمتع ياحلى الوجبات السندوتشات المتاحه عندنا و كم هي بالفعل
                لذيذه كما انها متنوعه و شهيه و يجب ان تقوم بتجربتها
              </p>
              <p>إيتيام سيد دولور إيه سي ديام فولوتبات</p>
              <p>إيتيام سيد دولور إيه سي ديام فولوتبات</p>
              <p>إيتيام سيد دولور إيه سي ديام فولوتبات</p>
              <button type="">
                <a href="/aboutme">أعرف المزيد</a>
              </button>
            </div>
            <div className="col-md-6">
              <img src={manyPics} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stomach">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>
                إذا امتلأت معدة الرجل <br />
                فلا فرق بين كونه غنيًا أو فقيرًا
              </h1>
              <p>
                استمتع ياحلى الوجبات السندوتشات المتاحه عندنا و كم هي بالفعل
                لذيذه كما انها متنوعه و شهيه و يجب ان تقوم بتجربتها
                <br /> ستمتع ياحلى الوجبات السندوتشات المتاحه عندنا و كم هي
                بالفعل لذيذه كما انها متنوعه و شهيه و يجب ان تقوم بتجربتها
              </p>
              <div>
                <a href="/ar">Watch Our Story</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ExploreOurFoods">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>اكتشف وجبتنا</h2>
              <p>
                أستمتع ياحلى الوجبات السندوتشات المتاحه عندنا و كم هي بالفعل
                لذيذه كما انها متنوعه و شهيه و يجب ان تقوم بتجربتها
                <br />
                أستمتع ياحلى الوجبات السندوتشات المتاحه عندنا و كم هي بالفعل
                لذيذه كما انها متنوعه و شهيه و يجب ان تقوم بتجربتها
                <br />
                لا ننردد بان تقوم بتجربه وجبتنا كما تهنه يوجد حلويات شهيه
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ARHome;
