import { useParams, Link, useNavigate } from 'react-router-dom';
import { guides } from '../data/guidesData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowLeft, Calendar, Clock, User, Eye, MapPin, CheckCircle, Lightbulb } from 'lucide-react';

export function GuideDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = guides.find(g => g.id === Number(id));

  if (!guide) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-white mb-4">Guide Not Found</h1>
          <p className="text-zinc-400 mb-8">The guide you're looking for doesn't exist.</p>
          <Link to="/guides">
            <Button className="bg-orange-600 hover:bg-orange-700">
              Back to Guides
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const difficultyColors: Record<string, string> = {
    'Beginner': 'bg-green-600/20 text-green-400 border-green-600/50',
    'Easy': 'bg-blue-600/20 text-blue-400 border-blue-600/50',
    'Medium': 'bg-yellow-600/20 text-yellow-400 border-yellow-600/50',
    'Hard': 'bg-red-600/20 text-red-400 border-red-600/50',
  };

  const categoryColors: Record<string, string> = {
    'Smokes': 'bg-gray-600/20 text-gray-400 border-gray-600/50',
    'Flashbangs': 'bg-yellow-600/20 text-yellow-400 border-yellow-600/50',
    'Molotovs': 'bg-orange-600/20 text-orange-400 border-orange-600/50',
    'Tutorials': 'bg-blue-600/20 text-blue-400 border-blue-600/50',
    'Strategies': 'bg-purple-600/20 text-purple-400 border-purple-600/50',
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Back Button */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/guides')}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Guides</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={`https://source.unsplash.com/1200x600/?${encodeURIComponent(guide.image)}`}
            alt={guide.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className={categoryColors[guide.category] || 'bg-zinc-700'}>
              {guide.category}
            </Badge>
            <Badge className={difficultyColors[guide.difficulty] || 'bg-zinc-700'}>
              {guide.difficulty}
            </Badge>
            <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/50 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {guide.map}
            </Badge>
          </div>

          <h1 className="text-white mb-4">
            {guide.title}
          </h1>

          <p className="text-zinc-300 mb-6 text-lg">
            {guide.description}
          </p>

          <div className="flex flex-wrap gap-6 text-zinc-400">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>By {guide.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{guide.publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{guide.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{guide.views} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Table of Contents */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 mb-12">
          <h2 className="text-white mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-orange-500" />
            Steps in this Guide
          </h2>
          <div className="space-y-2">
            {guide.steps.map((step) => (
              <a
                key={step.stepNumber}
                href={`#step-${step.stepNumber}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-orange-400 transition-colors py-2 px-3 rounded hover:bg-zinc-800"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600/20 text-orange-400 flex items-center justify-center">
                  {step.stepNumber}
                </span>
                <span>{step.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {guide.steps.map((step, index) => (
            <div
              key={step.stepNumber}
              id={`step-${step.stepNumber}`}
              className="scroll-mt-8"
            >
              {/* Step Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center">
                  <span className="text-white">{step.stepNumber}</span>
                </div>
                <div>
                  <h2 className="text-white">
                    {step.title}
                  </h2>
                </div>
              </div>

              {/* Step Image */}
              <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-6 border border-zinc-800">
                <ImageWithFallback
                  src={`https://source.unsplash.com/800x450/?${encodeURIComponent(step.image)}`}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Step Description */}
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 mb-6">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Tips */}
              {step.tips && step.tips.length > 0 && (
                <div className="bg-orange-900/10 border border-orange-600/30 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="h-5 w-5 text-orange-400" />
                    <h3 className="text-white">Pro Tips</h3>
                  </div>
                  <ul className="space-y-2">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-3 text-zinc-300">
                        <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Divider between steps */}
              {index < guide.steps.length - 1 && (
                <div className="mt-12 border-t border-zinc-800"></div>
              )}
            </div>
          ))}
        </div>

        {/* Completion Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-600/30 rounded-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-600/20 mb-4">
            <CheckCircle className="h-8 w-8 text-orange-400" />
          </div>
          <h2 className="text-white mb-3">
            Great Job!
          </h2>
          <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
            You've completed this guide. Practice these techniques in-game to master them. 
            Remember, consistency and repetition are key to improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/guides">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Browse More Guides
              </Button>
            </Link>
            <Button
              variant="outline"
              className="bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Related Guides */}
      <div className="bg-zinc-900/50 border-t border-zinc-800 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white mb-6">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides
              .filter(g => g.id !== guide.id && (g.category === guide.category || g.map === guide.map))
              .slice(0, 3)
              .map(relatedGuide => (
                <Link
                  key={relatedGuide.id}
                  to={`/guides/${relatedGuide.id}`}
                  className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-600/50 transition-all group"
                >
                  <div className="aspect-video bg-zinc-800 overflow-hidden relative">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/400x300/?${encodeURIComponent(relatedGuide.image)}`}
                      alt={relatedGuide.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      <span className="text-orange-500">{relatedGuide.map}</span>
                    </div>
                    <h3 className="text-white group-hover:text-orange-400 transition-colors">
                      {relatedGuide.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
