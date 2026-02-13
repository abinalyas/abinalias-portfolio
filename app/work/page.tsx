import { caseStudies } from '@/lib/case-studies';
import { WorkHoverList } from '@/components/work-hover-list';

export default function WorkPage() {
  return <WorkHoverList studies={caseStudies} />;
}
