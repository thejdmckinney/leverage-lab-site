interface CaseStudyCardProps {
  company: string
  industry: string
  problem: string
  solution: string
  result: string
  timeSaved: string
}

export default function CaseStudyCard({
  company,
  industry,
  problem,
  solution,
  result,
  timeSaved,
}: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{company}</h3>
        <p className="text-brand-teal font-semibold">{industry}</p>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Problem</h4>
          <p className="text-gray-600">{problem}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>
          <p className="text-gray-600">{solution}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Result</h4>
          <p className="text-gray-600">{result}</p>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Time Saved</span>
          <span className="text-2xl font-bold text-brand-teal">
            {timeSaved}
          </span>
        </div>
      </div>
    </div>
  )
}
