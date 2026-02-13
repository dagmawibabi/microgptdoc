'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Code2, Cpu, Zap, Layers, GitBranch, Sparkles, Terminal, Heart, ExternalLink, Play, FileCode, Flame, Scale } from 'lucide-react';

const sections = [
  {
    title: 'Getting Started',
    description: 'Introduction and overview',
    href: '/docs/getting-started',
    icon: BookOpen,
    number: '01',
  },
  {
    title: 'Tokenization',
    description: 'Converting text to numbers',
    href: '/docs/tokenization',
    icon: Layers,
    number: '02',
  },
  {
    title: 'Architecture',
    description: 'GPT model components',
    href: '/docs/architecture/attention',
    icon: Cpu,
    number: '03',
  },
  {
    title: 'Training',
    description: 'How models learn',
    href: '/docs/training/training-loop',
    icon: Zap,
    number: '04',
  },
  {
    title: 'Autograd',
    description: 'Automatic differentiation',
    href: '/docs/autograd',
    icon: GitBranch,
    number: '05',
  },
  {
    title: 'Generation',
    description: 'Text generation',
    href: '/docs/generation/inference',
    icon: Sparkles,
    number: '06',
  },
];

const pipeline = [
  'Tokenize',
  'Embed',
  'Transform',
  'Predict',
  'Train',
  'Generate',
];

const comparison = [
  { library: 'microgpt', lines: '250', deps: '0', file: '1' },
  { library: 'micrograd', lines: '~100', deps: '0', file: '1' },
  { library: 'PyTorch', lines: '~1M', deps: 'Many', file: 'Many' },
  { library: 'TensorFlow', lines: '~500K', deps: 'Many', file: 'Many' },
];

const features = [
  {
    icon: Flame,
    title: 'Minimal',
    description: 'One file. Zero dependencies. Pure Python standard library.',
  },
  {
    icon: Scale,
    title: 'Educational',
    description: 'Every line is readable. No magic. No abstraction hiding the math.',
  },
  {
    icon: Play,
    title: 'Executable',
    description: 'Run it yourself. Watch it train. See the loss go down.',
  },
  {
    icon: Heart,
    title: 'Foundational',
    description: 'Understand transformers from the ground up. Build your intuition.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header / Nav */}
      <header className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neutral-900 text-white flex items-center justify-center font-mono text-sm font-bold">
              m
            </div>
            <span className="font-mono text-sm font-medium">microgpt</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/docs" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Docs
            </Link>
            <Link
              href="https://github.com/dagmawibabi/microgptdoc"
              target="_blank"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              GitHub
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-2 mb-8">
              <span className="w-8 h-px bg-neutral-900" />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Andrej Karpathy
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              <span className="block">a complete GPT</span>
              <span className="block text-neutral-400">in ~250 lines</span>
              <span className="block">of Python</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-neutral-600 max-w-xl mb-12 leading-relaxed">
              Zero dependencies. No PyTorch. No NumPy. Just Python's standard library.
              Learn how language models work from the ground up.
            </p>

            {/* Code Block */}
            <div className="border border-neutral-200 bg-neutral-50 p-6 mb-12">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-neutral-200">
                <Terminal className="w-4 h-4 text-neutral-400" />
                <span className="font-mono text-xs text-neutral-500">terminal</span>
              </div>
              <pre className="font-mono text-sm text-neutral-700 leading-relaxed">
{`$ python microgpt.py
Downloading dataset... Done
Training... 10/10000
Loss: 4.23
"The " -> " dog"`}
              </pre>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center gap-3 px-6 py-4 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="font-mono text-xs text-neutral-400">
                Estimated time: 2 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 divide-x divide-neutral-200">
            <div className="py-6">
              <span className="block font-mono text-2xl font-bold">250</span>
              <span className="text-xs text-neutral-500 uppercase tracking-wider">Lines</span>
            </div>
            <div className="py-6 pl-4">
              <span className="block font-mono text-2xl font-bold">0</span>
              <span className="text-xs text-neutral-500 uppercase tracking-wider">Dependencies</span>
            </div>
            <div className="py-6 pl-4">
              <span className="block font-mono text-2xl font-bold">1</span>
              <span className="text-xs text-neutral-500 uppercase tracking-wider">File</span>
            </div>
            <div className="py-6 pl-4">
              <span className="block font-mono text-2xl font-bold">MIT</span>
              <span className="text-xs text-neutral-500 uppercase tracking-wider">License</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white p-8">
                  <Icon className="w-6 h-6 mb-4 text-neutral-900" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-8 h-px bg-neutral-900" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              How it works
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-xl">
            From text to tokens to predictions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-neutral-200 border border-neutral-200">
            {pipeline.map((step, i) => (
              <div
                key={step}
                className={`bg-white p-6 ${i === 0 ? '' : 'border-l border-neutral-200'}`}
              >
                <span className="block font-mono text-xs text-neutral-400 mb-2">
                  0{i + 1}
                </span>
                <span className="font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-8 h-px bg-neutral-900" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Comparison
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-xl">
            Tiny compared to the giants
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 pr-8 font-mono text-xs uppercase tracking-wider text-neutral-500">Library</th>
                  <th className="text-left py-4 px-8 font-mono text-xs uppercase tracking-wider text-neutral-500">Lines of Code</th>
                  <th className="text-left py-4 px-8 font-mono text-xs uppercase tracking-wider text-neutral-500">Dependencies</th>
                  <th className="text-left py-4 pl-8 font-mono text-xs uppercase tracking-wider text-neutral-500">Files</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, i) => (
                  <tr key={item.library} className="border-b border-neutral-200">
                    <td className={`py-4 pr-8 font-medium ${i === 0 ? 'text-neutral-900' : 'text-neutral-600'}`}>
                      {item.library}
                      {i === 0 && <span className="ml-2 text-xs bg-neutral-900 text-white px-2 py-0.5">this</span>}
                      {item.library === 'micrograd' && (
                        <a href="https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95" target="_blank" className="ml-2 inline-flex items-center">
                          <ExternalLink className="w-3 h-3 text-neutral-400" />
                        </a>
                      )}
                    </td>
                    <td className="py-4 px-8 font-mono">{item.lines}</td>
                    <td className="py-4 px-8 font-mono">{item.deps}</td>
                    <td className="py-4 pl-8 font-mono">{item.file}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-8 h-px bg-neutral-900" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Documentation
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-xl">
            Everything you need to understand transformers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group bg-white p-8 hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-xs text-neutral-300">{section.number}</span>
                    <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-neutral-400" />
                    <h3 className="font-bold text-lg">{section.title}</h3>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {section.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <blockquote className="max-w-2xl">
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              "If you really want to understand how GPT works, you should read the code.
              And if you want to understand the code, you should start here."
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-px bg-neutral-900" />
              <div>
                <cite className="not-italic font-medium block">Andrej Karpathy</cite>
                <span className="text-sm text-neutral-500">Computer Scientist</span>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <span className="w-8 h-px bg-neutral-900" />
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                  The Code
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Readable. Editable. Yours.
              </h2>
              <p className="text-neutral-500 mb-8 leading-relaxed">
                Every function fits on your screen. No jumping between files.
                No hidden abstractions. Just clean, understandable Python.
              </p>
              <Link
                href="https://github.com/dagmawibabi/microgptdoc"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
              >
                View the source
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
            <div className="border border-neutral-200 bg-neutral-900 p-6">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-neutral-800">
                <FileCode className="w-4 h-4 text-neutral-400" />
                <span className="font-mono text-xs text-neutral-500">microgpt.py</span>
              </div>
              <pre className="font-mono text-xs text-neutral-300 leading-relaxed overflow-x-auto">
{`class Linear:
  def __init__(self, nin, nout):
    self.W = torch.randn(nin, nout)
    self.b = torch.zeros(nout)

  def __call__(self, x):
    return x @ self.W + self.b

class Module:
  def parameters(self):
    return []

class Transformer(Module):
  def __init__(self):
    self.attention = SelfAttention()
    self.mlp = MLP()

  def __call__(self, x):
    x = self.attention(x)
    return self.mlp(x)`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
            <div className="bg-white p-12">
              <h3 className="text-2xl font-bold mb-4">Ready to dive in?</h3>
              <p className="text-neutral-500 mb-8">
                Start with the basics and work your way through the entire pipeline.
              </p>
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center gap-2 text-sm font-medium border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
              >
                Read the docs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-12">
              <h3 className="text-2xl font-bold mb-4">Want the code?</h3>
              <p className="text-neutral-500 mb-8">
                Grab the source and run it yourself. It's just one Python file.
              </p>
              <Link
                href="https://github.com/dagmawibabi/microgptdoc"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
              >
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-900 text-white flex items-center justify-center font-mono text-xs font-bold">
              m
            </div>
            <span className="font-mono text-xs text-neutral-500">microgpt</span>
          </div>
          <span className="text-xs text-neutral-400">
            Based on Andrej Karpathy's microgpt
          </span>
        </div>
      </footer>
    </div>
  );
}
