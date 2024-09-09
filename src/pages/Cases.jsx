import PageHeader from "@components/PageHeader";
import image from "/images/bg-1.jpg";
import CaseCard from "@components/CaseCard";

const Cases = () => {
  return (
    <>
      <PageHeader
        image={image}
        title="قـــصص نجــــــــــاح حالاتنـــا"
        desc="بفضل الله و بفضل ثقتكم بنا "
      />
      <section className="flex items-center justify-center max-w-screen-xl px-4 pt-2 mx-auto mt-12 sm:px-6 lg:px-8">
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full min-h-[calc(100vh-85px)] px-5 overflow-hidden rounded-default">
          <CaseCard
            image="https://www.drlikover.com/wp-content/themes/drlikover/images/osteoarthritus_b4_legs_case1.jpg"
            CardTitle="الأستاذ محمد محمد محمد"
            CardDescription="حالة تغيير مفصل الركبة حالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبة "
          />
          <CaseCard
            image="https://www.drlikover.com/wp-content/themes/drlikover/images/osteoarthritus_b4_legs_case1.jpg"
            CardTitle="الأستاذ محمد محمد محمد"
            CardDescription="حالة تغيير مفصل الركبة حالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبة "
          />
          <CaseCard
            image="https://www.drlikover.com/wp-content/themes/drlikover/images/osteoarthritus_b4_legs_case1.jpg"
            CardTitle="الأستاذ محمد محمد محمد"
            CardDescription="حالة تغيير مفصل الركبة حالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبة "
          />
          <CaseCard
            image="https://www.drlikover.com/wp-content/themes/drlikover/images/osteoarthritus_b4_legs_case1.jpg"
            CardTitle="الأستاذ محمد محمد محمد"
            CardDescription="حالة تغيير مفصل الركبة حالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبة "
          />
          <CaseCard
            image="https://www.drlikover.com/wp-content/themes/drlikover/images/osteoarthritus_b4_legs_case1.jpg"
            CardTitle="الأستاذ محمد محمد محمد"
            CardDescription="حالة تغيير مفصل الركبة حالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبة "
          />
          <CaseCard
            image="https://www.drlikover.com/wp-content/themes/drlikover/images/osteoarthritus_b4_legs_case1.jpg"
            CardTitle="الأستاذ محمد محمد محمد"
            CardDescription="حالة تغيير مفصل الركبة حالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبة "
          />
          <CaseCard
            image="https://www.drlikover.com/wp-content/themes/drlikover/images/osteoarthritus_b4_legs_case1.jpg"
            CardTitle="الأستاذ محمد محمد محمد"
            CardDescription="حالة تغيير مفصل الركبة حالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبةحالة تغيير مفصل الركبة "
          />
        </div>
      </section>
    </>
  );
};

export default Cases;
