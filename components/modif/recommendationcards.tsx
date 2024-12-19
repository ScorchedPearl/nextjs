import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export default function RecommendedCards({ user }:{user:any}) {

  const testimonials = user?.recommendedUsers?.map((user: { name: any; username: any; profileImageURL: any; }) => ({

    name: user?.name || "",

    designation: user?.username || "",

    src: user?.profileImageURL || "",

  }));

  return <AnimatedTestimonials testimonials={testimonials || []} />;

}

