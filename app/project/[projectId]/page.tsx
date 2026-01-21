"use client"
import React, { useEffect, useRef, useState } from 'react'
import ProjectHeader from './-shared/ProjectHeader'
import SettingSection from './-shared/SettingSection'
import axios from 'axios'
import { useParams } from 'next/navigation'
// import { ProjectType, ScreenConfig } from '@/type/types'
import { Loader2Icon } from 'lucide-react'
import { ProjectType, ScreenConfig } from '@/type/types'

// function ProjectCanvasPlayground ()  {
 
//  const { projectId } = useParams();
//    const [ProjectDetail,setProjetDetail] = useState<ProjectType>();
//   const [screenConfig,setScreenConfig] = useState<ScreenConfig[]>([]);
//   const[loading,setLoading] =useState(true);
//   const[LoadingMsg,setLoadingMsg] = useState('Loading');
//     useEffect(()=>{
//        projectId && GetProjectDetail();
//       },[projectId])

//   const GetProjectDetail= async ()=>{
//      setLoading(true);
//      setLoadingMsg('Loading...');
//       const result = await axios.get('/api/project?projectId=' + projectId);
//       console.log(result.data);
//        setProjetDetail(result?.data?.projectDetail);
//        setScreenConfig(result?.data?.screenconfig)
//       // if(result.data.screenConfig?.length==0){
//       //   generateScreenConfig()
//       // }
//       setLoading(false);
//     }
// useEffect(()=>{

//   if(ProjectDetail&&screenConfig&&screenConfig.length==0)
//   {
//     generateScreenConfig();
//   }
// },[ProjectDetail && screenConfig])



//  const generateScreenConfig= async ()=>{
//   setLoading(true);
//   setLoadingMsg('Generating Screen Config...');
//   const result = await axios.post('/api/generate-config',{
//   projectId:projectId,
//   deviceType:ProjectDetail?.device,
//   userInput:ProjectDetail?.userInput

//   })
  
//  console.log(result.data);
  
// setLoading(false);

//  }

function ProjectCanvasPlayground() {
  const { projectId } = useParams();
  const [ProjectDetail, setProjetDetail] = useState<ProjectType>();
  const [screenConfig, setScreenConfig] = useState<ScreenConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [LoadingMsg, setLoadingMsg] = useState('Loading');

  useEffect(() => {
    projectId && GetProjectDetail();
  }, [projectId]);

  const GetProjectDetail = async () => {
    setLoading(true);
    setLoadingMsg('Loading...');
    try {
      const result = await axios.get('/api/project?projectId=' + projectId);
      console.log(result.data);
      setProjetDetail(result?.data?.projectDetail);
      setScreenConfig(result?.data?.screenconfig || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching project:', error);
      setLoading(false);
    }
  };

  // ✅ FIXED: Use proper dependencies
  // useEffect(() => {
  //   if (ProjectDetail && screenConfig && screenConfig.length === 0) {
  //     console.log('Calling generateScreenConfig...');
  //     generateScreenConfig();
  //   }
  // }, [ProjectDetail&& screenConfig]); // ✅ Pass actual dependencies


const hasGeneratedRef = useRef(false);

useEffect(() => {
  if (
    ProjectDetail &&
    screenConfig.length === 0 &&
    !hasGeneratedRef.current
  ) {
    hasGeneratedRef.current = true;
    generateScreenConfig();
  }
}, [ProjectDetail, screenConfig]);

  

  const generateScreenConfig = async () => {
    console.log('generateScreenConfig called with:', {
      projectId,
      device: ProjectDetail?.device,
      userInput: ProjectDetail?.userInput
    });
    
    if (!projectId || !ProjectDetail?.device || !ProjectDetail?.userInput) {
      console.error('Missing required data for API call');
      return;
    }

    try {
      setLoading(true);
      setLoadingMsg('Generating Screen Config...');
      
      const result = await axios.post('/api/generate-config', {
        projectId: projectId,
        deviceType: ProjectDetail.device,
        userInput: ProjectDetail.userInput
      });
      
      console.log('Generated config:', result.data);


      
      // ✅ IMPORTANT: Update your state with the new config
      // setScreenConfig(result.data.screens || []);
      // Or refresh the project details
        setTimeout(() => {
      GetProjectDetail();
    }, 500);

      
    } catch (error) {
      console.error('API Error:', error);
      alert('Failed to generate config');
    } finally {
      setLoading(false);
      setLoadingMsg('');
    }
  };

  // Rest of your component...


  return (
    <div>
      <ProjectHeader/>
       <div>
       {loading &&
        <div className='p-3 absolute bg-blue-300/20 border-blue-600 border rounded-xl left-1/2 top-20' >
<h2 className='flex gap-2 items-center'><Loader2Icon  className='animate-spin'/> 
{LoadingMsg}</h2>
 
        </div>}
      
       {/* {setting} */}
     <SettingSection projectDetail={ProjectDetail}/>
      {/* {setting} */}
      </div>
    </div>
  )
}

export default ProjectCanvasPlayground


