'use client';

import { Check, Code, Copy } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import * as shiki from 'shiki';
import SectionHeader from '../section-header';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

const frameworks = [
  {
    name: 'Get Token',
    lang: 'javascript',
    code: `<!-- get token -->

    router.get('/:id', authenticateToken, async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid token ID format' });
    }

    const token = await DesignToken.findById(req.params.id)
      .populate('createdBy', 'username email');
    
    if (!token) {
      return res.status(404).json({ error: 'Design token not found' });
    }

    res.json(token);
  } catch (error) {
    console.error('Get token by id error:', error);
    res.status(500).json({ error: error.message...`,
  },
  {
    name: 'Create Token',
    lang: 'javascript',
    code: `<!-- create token -->
  
    router.post('/', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    const { name, category, value, description, tags } = req.body;

    if (!name || !category || !value) {
      return res.status(400).json({ error: 'Name, category, and value are required' });
    }

    const token = new DesignToken({
      name,
      category,
      value,
      description,
      tags: tags || [],
      createdBy: userId...`,
  },
  {
    name: 'Update Token',
    lang: 'javascript',
    code: `<!-- update token -->
  
  router.put('/:id', authenticateToken, async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid token ID format' });
    }

    const { name, category, value, description, tags } = req.body;

    const token = await DesignToken.findById(req.params.id);
    if (!token) {
      return res.status(404).json({ error: 'Design token not found' });
    }

    // check ownership or admin role
    if (token.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Permission denied'...`,
  },
  {
    name: 'Delete Token',
    lang: 'javascript',
    code: `<!-- delete token -->
  
  router.delete('/:id', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid token ID format' });
    }

    const token = await DesignToken.findById(req.params.id);
    if (!token) {
      return res.status(404).json({ error: 'Design token not found' });
    }

    await DesignToken.findByIdAndDelete(req.params.id);
    res.json({ message: 'Design token deleted successfully' });
  } catch (error) {
    console.error('Delete token error:', error);
    res.status(500).json({ error: error.message...`,
  },
];

export function CodeBlock1() {
  const [activeTab, setActiveTab] = useState(frameworks[0].name);
  const [highlightedCode, setHighlightedCode] = useState<{
    light: Record<string, string>;
    dark: Record<string, string>;
  }>({
    light: {},
    dark: {},
  });
  const [isLoading, setIsLoading] = useState(true);
  const { isAtLeast } = useMediaQuery();
  const isMobile = !isAtLeast('md');
  const { theme } = useTheme();

  useEffect(() => {
    async function highlightCode() {
      try {
        const highlighter = await shiki.createHighlighter({
          themes: ['github-dark-high-contrast', 'github-light-default'],
          langs: [
            'typescript',
            'tsx',
            'vue',
            'astro',
            'svelte',
            'javascript',
            'html',
          ],
        });

        const lightHighlighted: Record<string, string> = {};
        const darkHighlighted: Record<string, string> = {};

        for (const framework of frameworks) {
          lightHighlighted[framework.name] = highlighter.codeToHtml(
            framework.code,
            {
              lang: framework.lang,
              theme: 'github-light-default',
            },
          );

          darkHighlighted[framework.name] = highlighter.codeToHtml(
            framework.code,
            {
              lang: framework.lang,
              theme: 'github-dark-high-contrast',
            },
          );
        }

        setHighlightedCode({
          light: lightHighlighted,
          dark: darkHighlighted,
        });
      } catch (error) {
        console.error('Failed to highlight code:', error);
      } finally {
        setIsLoading(false);
      }
    }

    highlightCode();
  }, []); // Remove theme dependency

  // Get the current highlighted code based on theme
  const currentHighlightedCode =
    theme === 'dark' ? highlightedCode.dark : highlightedCode.light;

  return (
    <section className="section-padding container py-40 space-y-10.5">
          <SectionHeader
            icon={Check}
            category="Backend Infrastructure"
            title="RESTful API Design"
            description="A RESTful API for managing design tokens should include endpoints for
            CRUD operations, as well as user authentication and role-based
            access control."
          />

        <div className="mt-6 gap-6">
          {isMobile ? (
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full">
                <SelectValue>{activeTab}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {frameworks.map((framework) => (
                  <SelectItem key={framework.name} value={framework.name}>
                    {framework.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex gap-3">
                {frameworks.map((framework) => (
                  <TabsTrigger key={framework.name} value={framework.name}>
                    {framework.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}

          <div className="mt-4">
            {isLoading ? (
              <Card className="relative overflow-hidden !p-0">
                <CardContent className="!p-0">
                  <div className="flex h-92 items-center justify-center">
                    <div className="text-muted-foreground">Loading...</div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              frameworks.map(
                (framework) =>
                  framework.name === activeTab && (
                    <Card
                      key={framework.name}
                      className="relative overflow-hidden !p-0"
                    >
                      <CardContent className="!p-0">
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              currentHighlightedCode[framework.name] || '',
                          }}
                          className="h-104 overflow-x-auto overflow-y-auto text-sm [&_pre]:m-0 [&_pre]:h-104 [&_pre]:bg-transparent [&_pre]:p-4 [&_pre]:whitespace-pre-wrap"
                        />
                        <CopyButton
                          text={framework.code}
                          className="absolute top-4 right-4"
                        />
                      </CardContent>
                    </Card>
                  ),
              )
            )}
          </div>
        </div>
    </section>
  );
}

interface CopyButtonProps {
  text: string;
  className?: string;
}

function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  const handleCopy = async () => {
    if (copied) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      aria-label="Copy code"
      onClick={handleCopy}
      variant="ghost"
      size="icon"
      className={cn(className)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={copied ? 'check' : 'copy'}
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2 }}
          transition={{ duration: 0.15 }}
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
