import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Template data
const templates = [
  {
    id: "modern",
    name: "Modern",
    description:
      "Clean and contemporary design with a focus on skills and experience.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "professional",
    name: "Professional",
    description:
      "Traditional layout perfect for corporate and executive positions.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "creative",
    name: "Creative",
    description:
      "Unique design for creative industries and design professionals.",
    image: "/placeholder.svg?height=400&width=300",
  },
];

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="text-black flex min-h-screen flex-col">
      <main className="flex-1 bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <h1 className="mb-8 text-3xl font-bold">Choose a Resume Template</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Select a template that best represents your professional style. You
            can customize it in the next step.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`overflow-hidden transition-all hover:shadow-md ${
                  selectedTemplate === template.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      src={template.image || "/placeholder.svg"}
                      alt={template.name}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {selectedTemplate === template.id && (
                      <div className="absolute right-2 top-2 rounded-full bg-primary p-1">
                        <Check className="h-5 w-5 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <h3 className="mb-1 text-xl font-semibold">
                    {template.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {template.description}
                  </p>
                  <Button
                    variant={
                      selectedTemplate === template.id ? "default" : "outline"
                    }
                    className="mt-auto w-full"
                    asChild
                  >
                    <Link to={`/build/${template.id}`}>
                      {selectedTemplate === template.id ? "Continue" : "Select"}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
