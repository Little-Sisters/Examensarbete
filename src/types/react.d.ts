/// <reference types="@google/model-viewer" />

export declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.AllHTMLAttributes<
          Partial<globalThis.HTMLElementTagNameMap['model-viewer']>
        >,
        Partial<globalThis.HTMLElementTagNameMap['model-viewer']>
      >;
    }
  }
}

type ModelViewer = AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface &  ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase;
