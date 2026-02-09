"use client";

import { useState } from "react";
import { IdeaType, GeneratorState } from "@/types";
import "./Generator.css";

export default function Generator() {
  const [state, setState] = useState<GeneratorState>({
    ideaType: "music",
    ideas: [],
    loading: false,
  });

  const generateIdea = async () => {
    setState((prev) => ({ ...prev, loading: true }));

    // Simulate API call - replace with actual backend call
    setTimeout(() => {
      const newIdea = {
        id: Date.now(),
        type: state.ideaType as IdeaType,
        title: generateTitle(state.ideaType as IdeaType),
        description: generateDescription(state.ideaType as IdeaType),
        tags: generateTags(state.ideaType as IdeaType),
        createdAt: new Date(),
      };

      setState((prev) => ({
        ...prev,
        ideas: [newIdea, ...prev.ideas],
        loading: false,
      }));
    }, 1000);
  };

  const generateTitle = (type: IdeaType): string => {
    const musicTitles = [
      "Neon Dreams",
      "Midnight Echo",
      "Crystal Waves",
      "Cosmic Journey",
      "Ethereal Pulse",
    ];
    const videoTitles = [
      "Urban Tales",
      "Nature's Canvas",
      "Digital Horizons",
      "Untold Stories",
      "Perspectives",
    ];

    const titles = type === "music" ? musicTitles : videoTitles;
    return titles[Math.floor(Math.random() * titles.length)];
  };

  const generateDescription = (type: IdeaType): string => {
    const musicDesc = [
      "An electronic track blending ambient sounds with upbeat rhythms",
      "A soulful ballad exploring themes of love and nostalgia",
      "An experimental piece combining traditional and modern instruments",
      "A high-energy dance track with infectious melodies",
      "An introspective composition featuring layered vocals",
    ];
    const videoDesc = [
      "A visually stunning exploration of urban landscapes",
      "A documentary-style piece capturing human connections",
      "An artistic short film with surreal cinematography",
      "A behind-the-scenes look at creative processes",
      "A narrative journey across diverse cultures",
    ];

    const descriptions =
      type === "music" ? musicDesc : videoDesc;
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  const generateTags = (type: IdeaType): string[] => {
    const musicTags = ["electronic", "ambient", "modern", "experimental"];
    const videoTags = ["visual", "cinematic", "artistic", "narrative"];

    const tags = type === "music" ? musicTags : videoTags;
    const shuffled = [...tags].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  return (
    <div className="generator-container">
      <div className="generator-card">
        <div className="controls">
          <div className="control-group">
            <label htmlFor="ideaType">Generate Ideas For:</label>
            <select
              id="ideaType"
              value={state.ideaType}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  ideaType: e.target.value as IdeaType,
                }))
              }
              className="select-input"
            >
              <option value="music">Music</option>
              <option value="video">Video</option>
            </select>
          </div>

          <button
            onClick={generateIdea}
            disabled={state.loading}
            className="btn-generate"
          >
            {state.loading ? "Generating..." : "Generate Idea"}
          </button>
        </div>

        <div className="ideas-list">
          {state.ideas.length === 0 ? (
            <div className="empty-state">
              <p>Click "Generate Idea" to create your first concept</p>
            </div>
          ) : (
            state.ideas.map((idea) => (
              <div key={idea.id} className="idea-card">
                <div className="idea-header">
                  <h3>{idea.title}</h3>
                  <span className="idea-type">{idea.type}</span>
                </div>
                <p className="idea-description">{idea.description}</p>
                <div className="idea-tags">
                  {idea.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
